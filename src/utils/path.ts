import path from "node:path";
import { fileURLToPath } from "node:url";

interface Paths {
  input: string;
  output: string;
  outputTypst: string;
  root: string;
}


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const root = path.resolve(__dirname, "../..");
const input = path.resolve(root, "build/resume.yaml");

const outputTypst = path.resolve(process.cwd(), "output/resume.typ");
const output = path.resolve(process.cwd(), "output/resume.pdf");

const paths: Paths = {
  input,
  output,
  outputTypst,
  root,
};

export { paths };



