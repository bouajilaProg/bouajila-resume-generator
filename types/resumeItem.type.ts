import { z } from "zod";
import { Certification } from "./certif.type";
import { CertificationSchema } from "./certif.type";
import { EducationItem } from "./education.type";
import { EducationItemSchema } from "./education.type";
import { WorkExperience } from "./experience.type";
import { WorkExperienceSchema } from "./experience.type";
import { ExtraCurricularActivity } from "./extraCurr.type";
import { ExtraCurricularActivitySchema } from "./extraCurr.type";
import { Hobbies } from "./hobbies.type";
import { HobbiesSchema } from "./hobbies.type";
import { Languages } from "./languages.type";
import { LanguagesSchema } from "./languages.type";
import { PersonalInfo } from "./personalInfo.type";
import { PersonalInfoSchema } from "./personalInfo.type";
import { Project } from "./project.type";
import { ProjectSchema } from "./project.type";
import { Skills } from "./skills.type";
import { SkillsSchema } from "./skills.type";

// 1. Define the possible section types as constants
export const SectionType = {
  Education: "education",
  Project: "project",
  WorkExperience: "work_experience",
  Skills: "skills",
  Certification: "certification",
  ExtraCurricular: "extracurricular",
  Hobbies: "hobbies",
  Languages: "languages",
} as const;

export type SectionTypeValue = typeof SectionType[keyof typeof SectionType];

export type ResumeSection =
  | { type: typeof SectionType.Education; body: EducationItem[] }
  | { type: typeof SectionType.Project; body: Project[] }
  | { type: typeof SectionType.WorkExperience; body: WorkExperience[] }
  | { type: typeof SectionType.Skills; body: Skills }
  | { type: typeof SectionType.Certification; body: Certification[] }
  | { type: typeof SectionType.ExtraCurricular; body: ExtraCurricularActivity[] }
  | { type: typeof SectionType.Hobbies; body: Hobbies }
  | { type: typeof SectionType.Languages; body: Languages };

export interface Resume {
  name: string;
  description: string;
  template: string;
  lastUpdate: string;
  personalInfo?: PersonalInfo;

  sections: ResumeSection[];
}

// --- Zod Schemas ---

export const ResumeSectionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal(SectionType.Education),
    body: z.array(EducationItemSchema, { error: "Education body must be a list" })
      .min(1, { error: "Education section must have at least one entry" }),
  }),
  z.object({
    type: z.literal(SectionType.Project),
    body: z.array(ProjectSchema, { error: "Projects body must be a list" })
      .min(1, { error: "Projects section must have at least one entry" }),
  }),
  z.object({
    type: z.literal(SectionType.WorkExperience),
    body: z.array(WorkExperienceSchema, { error: "Work experience body must be a list" })
      .min(1, { error: "Work experience section must have at least one entry" }),
  }),
  z.object({
    type: z.literal(SectionType.Skills),
    body: SkillsSchema,
  }),
  z.object({
    type: z.literal(SectionType.Certification),
    body: z.array(CertificationSchema, { error: "Certifications body must be a list" })
      .min(1, { error: "Certifications section must have at least one entry" }),
  }),
  z.object({
    type: z.literal(SectionType.ExtraCurricular),
    body: z.array(ExtraCurricularActivitySchema, { error: "Extra-curricular body must be a list" })
      .min(1, { error: "Extra-curricular section must have at least one entry" }),
  }),
  z.object({
    type: z.literal(SectionType.Hobbies),
    body: HobbiesSchema
      .min(1, { error: "Hobbies section must have at least one entry" }),
  }),
  z.object({
    type: z.literal(SectionType.Languages),
    body: LanguagesSchema
      .min(1, { error: "Languages section must have at least one entry" }),
  }),
]);

export const ResumeSchema = z.object({
  name: z.string({ error: "Resume name is required" })
    .min(1, { error: "Resume name can not be empty" }),
  description: z.string({ error: "Resume description is required" })
    .min(1, { error: "Resume description can not be empty" }),
  template: z.string({ error: "Template name is required" })
    .min(1, { error: "Template name can not be empty" }),
  lastUpdate: z.string({ error: "Last update date is required" })
    .min(1, { error: "Last update date can not be empty" }),
  personalInfo: PersonalInfoSchema.optional(),
  sections: z.array(ResumeSectionSchema, {
    error: "Sections must be a list",
  }),
});
