import { execa } from "execa";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Result } from "../../types/result.type";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../");

/**
 * Checks if Typst CLI is available. Throws if not found.
 */
export async function unsafeVerifyEnv() {
  try {
    await execa("typst", ["--version"], { stdout: "ignore" });
  } catch (err) {
    throw new Error(
      "Typst not found. Install it from https://typst.app/docs/install/"
    );
  }
}

/**
 * Safely checks if Typst CLI is available.
 */
export async function verifyEnv(): Promise<Result<boolean>> {
  try {
    await unsafeVerifyEnv();
    return { success: true, data: true, error: null };
  } catch (err) {
    return { 
      success: false, 
      data: null, 
      error: err instanceof Error ? err : new Error(String(err)) 
    };
  }
}

/**
 * Compiles Typst source to PDF. Throws on failure.
 */
export async function unsafeCompileToPdf(inputFile: string, outputFile: string) {
  try {
    await execa("typst", [
      "compile",
      "--root", projectRoot,
      inputFile,
      outputFile,
    ]);
  } catch (err) {
    const message = (err as any).stderr || (err as Error).message || String(err);
    throw new Error("Compilation failed: " + message);
  }
}

/**
 * Safely compiles Typst source to PDF.
 */
export async function compileToPdf(
  inputFile: string, 
  outputFile: string
): Promise<Result<boolean>> {
  try {
    await unsafeCompileToPdf(inputFile, outputFile);
    return { success: true, data: true, error: null };
  } catch (err) {
    return { 
      success: false, 
      data: null, 
      error: err instanceof Error ? err : new Error(String(err)) 
    };
  }
}

