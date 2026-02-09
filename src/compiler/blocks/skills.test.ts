import { describe, it, expect } from "vitest";
import { SkillsBlock } from "./skills";
import { Skills } from "../../../types/skills.type";

describe("SkillsBlock", () => {
  it("should generate correct Typst code for skills", () => {
    const mockSkills: Skills = {
      languages: [
        { id: 1, name: "TS", type: "LANG" },
        { id: 2, name: "Rust", type: "LANG" }
      ],
      technologies: [{ id: 3, name: "Node", type: "TECH" }],
      softSkills: [{ id: 4, name: "Agile", type: "SOFT" }]
    };

    const result = SkillsBlock(mockSkills);
    expect(result).toContain("[*Languages*: TS, Rust]");
    expect(result).toContain("[*Technologies*: Node]");
    expect(result).toContain("[*Soft Skills*: Agile]");
  });
});
