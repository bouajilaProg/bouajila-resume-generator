import { describe, it, expect } from "vitest";
import { validateResume, SectionType } from "./index";
import mockResume from "./mocks/mockResume";
import mock2 from "./mocks/mock2.json";

describe("Resume Validation", () => {
  it("should pass for a valid mock resume", () => {
    const result = validateResume(mockResume);
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });

  it("should pass for mock2 data", () => {
    const resume2 = {
      name: "Mock 2",
      description: "Desc",
      lastUpdate: "2025",
      ...mock2
    };
    const result = validateResume(resume2);
    if (!result.success) {
      console.log(result.error.message);
    }
    expect(result.success).toBe(true);
  });

  describe("Personal Info Validation", () => {
    it("should fail when phone number contains letters", () => {
      const badResume = {
        ...mockResume,
        personalInfo: {
          ...mockResume.personalInfo!,
          contact: [
            { id: 1, type: "Phone", value: "abc123" }
          ]
        }
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("personalInfo.contact[0].value: Phone number can not contain letters");
    });

    it("should fail when email is invalid", () => {
      const badResume = {
        ...mockResume,
        personalInfo: {
          ...mockResume.personalInfo!,
          contact: [
            { id: 1, type: "Email", value: "not-an-email" }
          ]
        }
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("personalInfo.contact[0].value: Email must be a valid email address (e.g. name@example.com)");
    });

    it("should pass when contact list is missing", () => {
      const { contact, ...restPersonalInfo } = mockResume.personalInfo!;
      const validResume = {
        ...mockResume,
        personalInfo: restPersonalInfo
      };
      const result = validateResume(validResume);
      expect(result.success).toBe(true);
    });

    it("should pass when contact list is empty", () => {
      const validResume = {
        ...mockResume,
        personalInfo: {
          ...mockResume.personalInfo!,
          contact: []
        }
      };
      const result = validateResume(validResume);
      expect(result.success).toBe(true);
    });
  });

  describe("Optional Sections Validation", () => {
    it("should pass when sections list is missing", () => {
      const { sections, ...validResume } = mockResume;
      const result = validateResume(validResume);
      expect(result.success).toBe(true);
    });

    it("should pass when sections list is empty", () => {
      const validResume = {
        ...mockResume,
        sections: []
      };
      const result = validateResume(validResume);
      expect(result.success).toBe(true);
    });

    it("should pass when a section body is empty", () => {
      const validResume = {
        ...mockResume,
        sections: [
          { type: SectionType.Education, body: [] }
        ]
      };
      const result = validateResume(validResume);
      expect(result.success).toBe(true);
    });
  });

  describe("Education Section Validation", () => {
    it("should fail with invalid degree type", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.Education,
            body: [
              {
                id: 1,
                degreeType: "INVALID",
                degreeName: "CS",
                institution: "University",
                startDate: "2020",
                endDate: "2024",
                keySkills: "coding"
              }
            ]
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body[0].degreeType: Degree type must be BS, MS, or PhD");
    });

    it("should fail when id is not a number", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.Education,
            body: [
              {
                id: "not-a-number",
                degreeType: "BS",
                degreeName: "CS",
                institution: "University",
                startDate: "2020",
                endDate: "2024",
                keySkills: "coding"
              }
            ]
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body[0].id: Education id must be a whole number");
    });
  });

  describe("Skills Section Validation", () => {
    it("should fail with invalid skill type", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.Skills,
            body: {
              languages: [
                { id: 1, type: "INVALID_TYPE", name: "JS" }
              ]
            }
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body.languages[0].type: Skill type must be LANG, TECH, or SOFT");
    });
  });

  describe("Project Section Validation", () => {
    it("should fail with invalid URL for project link", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.Project,
            body: [
              {
                id: 1,
                title: "Test Project",
                tools: "JS",
                projectLink: "not-a-url"
              }
            ]
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body[0].projectLink: Project link must be a valid URL");
    });
  });

  describe("Certification Section Validation", () => {
    it("should fail when required fields are missing", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.Certification,
            body: [
              { id: 1, name: "Cert" } // missing issuingOrganization and issueDate
            ]
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body[0].issuingOrganization: Issuing organization is required");
      expect(result.error?.message).toContain("sections[0].body[0].issueDate: Issue date is required");
    });
  });

  describe("Languages Section Validation", () => {
    it("should fail with invalid proficiency level", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.Languages,
            body: [
              { id: 1, name: "English", proficiency: "GOD_TIER" }
            ]
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body[0].proficiency: Proficiency must be one of: Native, Fluent, Advanced, Intermediate, or Beginner");
    });
  });

  describe("Hobbies Section Validation", () => {
    it("should fail when hobby name is empty", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.Hobbies,
            body: [
              { id: 1, name: "" }
            ]
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body[0].name: Hobby name can not be empty");
    });
  });

  describe("Extra-Curricular Section Validation", () => {
    it("should fail when activity name is empty", () => {
      const badResume = {
        ...mockResume,
        sections: [
          {
            type: SectionType.ExtraCurricular,
            body: [
              { id: 1, activityName: "", startDate: "2020" }
            ]
          }
        ]
      };
      const result = validateResume(badResume);
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain("sections[0].body[0].activityName: Activity name can not be empty");
    });
  });
});
