import { z } from "zod";

// skills info
const SKILL_TYPES = {
  LANG: "languages",
  TECH: "technologies",
  SOFT: "softSkills",
} as const;

type SkillType = keyof typeof SKILL_TYPES;

interface SkillItem {
  id: number;
  type: SkillType;
  name: string;
}

interface Skills {
  languages: SkillItem[] | undefined;
  technologies: SkillItem[] | undefined;
  softSkills: SkillItem[] | undefined;
}

export type { Skills, SkillItem, SkillType };
export { SKILL_TYPES };

// --- Zod Schemas ---

export const SkillTypeSchema = z.enum(["LANG", "TECH", "SOFT"] as const, {
  error: "Skill type must be LANG, TECH, or SOFT",
});

export const SkillItemSchema = z.object({
  id: z.int({ error: "Skill id must be a whole number" }),
  type: SkillTypeSchema,
  name: z.string({ error: "Skill name is required" })
    .min(1, { error: "Skill name can not be empty" }),
});

export const SkillsSchema = z.object({
  languages: z.array(SkillItemSchema, { error: "Languages skills must be a list" }).optional(),
  technologies: z.array(SkillItemSchema, { error: "Technologies skills must be a list" }).optional(),
  softSkills: z.array(SkillItemSchema, { error: "Soft skills must be a list" }).optional(),
});

