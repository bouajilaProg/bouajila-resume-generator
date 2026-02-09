import { describe, it, expect } from "vitest";
import { ProjectBlock } from "./project";
import { Project } from "../../../types/project.type";

describe("ProjectBlock", () => {
  it("should generate correct Typst code for project", () => {
    const mockProj: Project = {
      id: 1,
      title: "My Project",
      tools: "TypeScript, Vitest",
      notes: ["Built this", "Tested that"],
      projectLink: "https://example.com"
    };

    const result = ProjectBlock(mockProj);
    expect(result).toContain('title: "My Project"');
    expect(result).toContain('description: ("Built this", "Tested that")');
    expect(result).toContain('tags: ("TypeScript", "Vitest")');
    expect(result).toContain('linkUrl: "https://example.com"');
  });
});
