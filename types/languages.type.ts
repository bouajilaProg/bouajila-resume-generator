import { z } from "zod";

export const PROFICIENCY_LEVELS = [
  "Native",
  "Fluent",
  "Advanced",
  "Intermediate",
  "Beginner",
] as const;

export type ProficiencyLevel = (typeof PROFICIENCY_LEVELS)[number];

export interface Language {
  id: number;
  name: string;
  proficiency?: ProficiencyLevel;
}

export type Languages = Language[];

// --- Zod Schemas ---

export const ProficiencyLevelSchema = z.enum(PROFICIENCY_LEVELS, {
  error: "Proficiency must be one of: Native, Fluent, Advanced, Intermediate, or Beginner",
});

export const LanguageSchema = z.object({
  id: z.int({ error: "Language id must be a whole number" }),
  name: z.string({ error: "Language name is required" })
    .min(1, { error: "Language name can not be empty" }),
  proficiency: ProficiencyLevelSchema.optional(),
});

export const LanguagesSchema = z.array(LanguageSchema, {
  error: "Languages must be a list",
});
