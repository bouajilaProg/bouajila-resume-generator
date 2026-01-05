#!/usr/bin/env node

import { Command } from "commander";
import { compileCommand } from "../src/programs/compile.js";
const program = new Command();

program
  .name("resume")
  .description("Resume compiler powered by Typst")
  .version("0.1.0");

program
  .command("compile")
  .description("Compile build/resume.typ to PDF")
  .action(() => {
    compileCommand();
  });

program.parse();
