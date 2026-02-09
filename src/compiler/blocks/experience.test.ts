import { describe, it, expect } from "vitest";
import { ExperienceBlock } from "./experience";
import { WorkExperience } from "../../../types/experience.type";

describe("ExperienceBlock", () => {
  it("should generate correct Typst code for a work experience", () => {
    const mockExp: WorkExperience = {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Tech Corp",
      location: "San Francisco",
      startDate: "2020-01-01",
      endDate: "Present",
      summary: "Developed cool stuff",
      keywords: "React, Node.js"
    };

    const result = ExperienceBlock(mockExp);
    expect(result).toContain('title: "Software Engineer"');
    expect(result).toContain('titleRole: "Tech Corp"');
    expect(result).toContain('description: "Developed cool stuff"');
    expect(result).toContain('tags: ("React",  "Node.js")');
  });

  it("should escape special characters", () => {
    const mockExp: WorkExperience = {
      id: 2,
      jobTitle: 'Engineer "Senior"',
      company: "Company #1",
      location: "Remote",
      startDate: "2021",
      endDate: "2022",
      summary: "Escaping \\ check",
      keywords: "Tag1, Tag2"
    };

    const result = ExperienceBlock(mockExp);
    expect(result).toContain('title: "Engineer \\"Senior\\""');
    expect(result).toContain('titleRole: "Company \\#1"');
    expect(result).toContain('description: "Escaping \\\\ check"');
  });
});
