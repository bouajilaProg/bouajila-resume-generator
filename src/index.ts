import { promises as fs } from "node:fs";
import path from "node:path";
import os from "node:os";
import { ResumeBuilder } from "./compiler/blocks/ResumeBuilder";
import { unsafeCompileToPdf, unsafeVerifyEnv, projectRoot } from "./compiler/compile";

// Export all types and values (like SectionType) from the types directory
export * from "../types/index";
import type { Resume, Result } from "../types/index";
import { ResumeSchema } from "../types/index";
import { z } from "zod";

export interface CompileOptions {
  /** Output format - "buffer" returns Node Buffer, "blob" returns Blob */
  format?: "buffer" | "blob";
  /** If provided, writes the PDF to this file path */
  outputPath?: string;
}

export interface CompileResult {
  /** PDF as Buffer (when format is "buffer" or undefined) */
  buffer?: Buffer;
  /** PDF as Blob (when format is "blob") */
  blob?: Blob;
}

/**
 * Formats Zod validation issues into a list of explicit, human-readable messages.
 * Each message includes the field path so the user knows exactly what is wrong.
 *
 * Example output:
 *   ["personalInfo.contact[0].value: Phone number can not contain letters"]
 */
export function formatValidationErrors(error: z.ZodError): string[] {
  return error.issues.map((issue) => {
    const fieldPath = issue.path
      .map((segment, i) =>
        typeof segment === "number"
          ? `[${segment}]`
          : i > 0
            ? `.${String(segment)}`
            : String(segment)
      )
      .join("");

    return fieldPath ? `${fieldPath}: ${issue.message}` : issue.message;
  });
}

/**
 * Validates a Resume object against the schema.
 * Returns a Result with the validated resume or an Error whose message
 * contains every field-level validation problem.
 */
export function validateResume(resume: unknown): Result<Resume> {
  const result = ResumeSchema.safeParse(resume);

  if (result.success) {
    return { success: true, data: result.data as Resume, error: null };
  }

  const messages = formatValidationErrors(result.error);
  const error = new Error(
    `Resume validation failed:\n${messages.map((m) => `  - ${m}`).join("\n")}`
  );

  return { success: false, data: null, error };
}

/**
 * Compiles a Resume object into a PDF. Throws an error if validation or compilation fails.
 * Validation errors list every invalid field explicitly.
 * 
 * @param resume - The resume data to compile
 * @param options - Optional configuration for output format
 * @returns CompileResult containing the PDF as buffer or blob
 */
export async function unsafeCompile(
  resume: Resume,
  options: CompileOptions = {}
): Promise<CompileResult> {
  const { format = "buffer", outputPath } = options;

  // --- Validate resume data first ---
  const validation = validateResume(resume);
  if (!validation.success) {
    throw validation.error;
  }

  // confirm Typst is available
  await unsafeVerifyEnv();

  // create temp directory for compilation inside project root
  // Typst requires source files to be within the --root directory
  const tempBaseDir = path.join(projectRoot, ".tmp-compile-");
  try {
    await fs.mkdir(path.dirname(tempBaseDir), { recursive: true });
  } catch {}
  
  const tempDir = await fs.mkdtemp(tempBaseDir);
  const tempTypst = path.join(tempDir, "resume.typ");
  const tempPdf = path.join(tempDir, "resume.pdf");

  // create the Typst source from the Resume object
  const builder = new ResumeBuilder();
  builder
    .setBase()
    .setHeader(resume?.personalInfo?.name, resume?.personalInfo?.contact)
    .addProfile(resume?.personalInfo?.description);

  for (const section of resume.sections) {
    builder.addSection(section);
  }
  const resumeString = builder.build();

  // compile to PDF and read the result
  try {
    await fs.writeFile(tempTypst, resumeString);
    await unsafeCompileToPdf(tempTypst, tempPdf);

    const pdfBuffer = await fs.readFile(tempPdf);

    // Write to output path if specified
    if (outputPath) {
      const outputDir = path.dirname(outputPath);
      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(outputPath, pdfBuffer);
    }

    // Return in requested format
    if (format === "blob") {
      return { blob: new Blob([pdfBuffer], { type: "application/pdf" }) };
    }
    return { buffer: pdfBuffer };
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

/**
 * Safely compiles a Resume object into a PDF.
 * Returns a Result object instead of throwing errors.
 * Validation errors list every invalid field explicitly.
 * 
 * @param resume - The resume data to compile
 * @param options - Optional configuration for output format
 * @returns Result object containing either the CompileResult or an Error
 */
export async function compile(
  resume: Resume,
  options: CompileOptions = {}
): Promise<Result<CompileResult>> {
  try {
    const data = await unsafeCompile(resume, options);
    return { success: true, data, error: null };
  } catch (err) {
    return { 
      success: false, 
      data: null, 
      error: err instanceof Error ? err : new Error(String(err)) 
    };
  }
}

/**
 * Generates Typst source code from a Resume object without compiling to PDF.
 * Validates the resume data first — throws if invalid.
 * 
 * @param resume - The resume data to convert
 * @returns The Typst source code as a string
 */
export function generateTypstSource(resume: Resume): string {
  // --- Validate resume data first ---
  const validation = validateResume(resume);
  if (!validation.success) {
    throw validation.error;
  }

  const builder = new ResumeBuilder();
  builder
    .setBase()
    .setHeader(resume?.personalInfo?.name, resume?.personalInfo?.contact)
    .addProfile(resume?.personalInfo?.description);

  for (const section of resume.sections) {
    builder.addSection(section);
  }

  return builder.build();
}

// Export the builder for advanced use cases
export { ResumeBuilder } from "./compiler/blocks/ResumeBuilder";
