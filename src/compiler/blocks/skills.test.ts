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

  it("should escape special characters in skill names", () => {
    const mockSkills: Skills = {
      languages: [{ id: 1, name: "C#", type: "LANG" }],
      technologies: [{ id: 2, name: "Vue.js [Legacy]", type: "TECH" }],
      softSkills: [{ id: 3, name: "Can do *everything*", type: "SOFT" }]
    };

    const result = SkillsBlock(mockSkills);
    // # is escaped as \#, [ as \[, ] as \], * as \*
    expect(result).toContain("C\\#");
    expect(result).toContain("Vue.js \\[Legacy\\]");
    expect(result).toContain("Can do \\*everything\\*");
  });
});
