import { describe, it, expect } from "vitest";
import { EducationBlock } from "./education";
import { EducationItem } from "../../../types/education.type";

describe("EducationBlock", () => {
  it("should generate correct Typst code for education", () => {
    const mockEdu: EducationItem = {
      id: 1,
      degreeType: "BS",
      degreeName: "Computer Science",
      institution: "State University",
      startDate: "2016",
      endDate: "2020",
      summary: "Honors student",
      highlights: ["GPA 4.0", "Top 1%"],
      keySkills: "Algorithms, Data Structures"
    };

    const result = EducationBlock(mockEdu);
    expect(result).toContain('title: "Computer Science"');
    expect(result).toContain('titleRole: "State University"');
    expect(result).toContain('summary: "Honors student"');
    expect(result).toContain('highlights: ("GPA 4.0", "Top 1%")');
    expect(result).toContain('tags: ("Algorithms", "Data Structures")');
  });
});
