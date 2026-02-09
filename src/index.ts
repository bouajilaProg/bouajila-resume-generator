import { promises as fs } from "node:fs";
import path from "node:path";
import os from "node:os";
import { ResumeBuilder } from "./compiler/blocks/ResumeBuilder";
import { compileToPdf, verifyEnv } from "./compiler/compile";

// Export all types and values (like SectionType) from the types directory
export * from "../types/index";
import type { Resume } from "../types/index";

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
 * Compiles a Resume object into a PDF.
 * 
 * @param resume - The resume data to compile
 * @param options - Optional configuration for output format
 * @returns CompileResult containing the PDF as buffer or blob
 */
export async function compile(
  resume: Resume,
  options: CompileOptions = {}
): Promise<CompileResult> {
  const { format = "buffer", outputPath } = options;

  // confirm Typst is available
  await verifyEnv();

  // create temp directory for compilation
  const tempBaseDir = path.join(os.tmpdir(), "yaml-resume-");
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
    await compileToPdf(tempTypst, tempPdf);

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
 * Generates Typst source code from a Resume object without compiling to PDF.
 * Useful for debugging or custom Typst workflows.
 * 
 * @param resume - The resume data to convert
 * @returns The Typst source code as a string
 */
export function generateTypstSource(resume: Resume): string {
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
