import { compile } from "./index";
import mockResume from "./compiler/test/mockResume";
import path from "node:path";
import fs from "node:fs/promises";

async function dev() {
  console.log("🚀 Starting dev compilation...");
  const outputPath = path.join(process.cwd(), "output", "resume.pdf");
  
  try {
    await compile(mockResume, { outputPath });
    console.log(`✅ Resume successfully compiled to: ${outputPath}`);
  } catch (error) {
    console.error("❌ Compilation failed:", error);
  }
}

dev();
