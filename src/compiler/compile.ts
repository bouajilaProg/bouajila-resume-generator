import { execa } from "execa";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../");

export async function verifyEnv() {
  try {
    await execa("typst", ["--version"], { stdout: "ignore" });
  } catch (err) {
    throw new Error(
      "Typst not found. Install it from https://typst.app/docs/install/"
    );
  }
}

export async function compileToPdf(inputFile: string, outputFile: string) {
  try {
    await execa("typst", [
      "compile",
      "--root", projectRoot,
      inputFile,
      outputFile,
    ]);
  } catch (err) {
    throw new Error("Compilation failed. " + (err as Error).message);
  }
}

