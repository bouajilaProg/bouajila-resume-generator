import { z } from "zod";
import { Hobbies } from "./hobbies.type";
import { Languages } from "./languages.type";

export const CONTACT_TYPES = [
  "Email",
  "Phone",
  "Website",
  "GitHub",
  "LinkedIn",
] as const;

export type ContactType = (typeof CONTACT_TYPES)[number];

export interface Contact {
  id: number;
  type: ContactType;
  value: string;
}

export interface PersonalInfo {
  name: string;
  location: string;
  description: string;
  contact?: Contact[];
}

// --- Zod Schemas ---

export const ContactTypeSchema = z.enum(CONTACT_TYPES, {
  error: "Contact type must be one of: Email, Phone, Website, GitHub, or LinkedIn",
});

/**
 * Base contact schema — extended with type-specific value refinements.
 */
const BaseContactSchema = z.object({
  id: z.int({ error: "Contact id must be a whole number" }),
  type: ContactTypeSchema,
  value: z.string({ error: "Contact value is required" })
    .min(1, { error: "Contact value can not be empty" }),
});

const PhoneContactSchema = BaseContactSchema.extend({
  type: z.literal("Phone"),
  value: z.string({ error: "Phone number is required" })
    .min(1, { error: "Phone number can not be empty" })
    .regex(/^[^a-zA-Z]*$/, { error: "Phone number can not contain letters" }),
});

const EmailContactSchema = BaseContactSchema.extend({
  type: z.literal("Email"),
  value: z.string({ error: "Email is required" })
    .min(1, { error: "Email can not be empty" })
    .email({ error: "Email must be a valid email address (e.g. name@example.com)" }),
});

const WebsiteContactSchema = BaseContactSchema.extend({
  type: z.literal("Website"),
  value: z.string({ error: "Website URL is required" })
    .min(1, { error: "Website URL can not be empty" })
    .url({ error: "Website must be a valid URL" }),
});

const GitHubContactSchema = BaseContactSchema.extend({
  type: z.literal("GitHub"),
});

const LinkedInContactSchema = BaseContactSchema.extend({
  type: z.literal("LinkedIn"),
});

export const ContactSchema = z.discriminatedUnion("type", [
  PhoneContactSchema,
  EmailContactSchema,
  WebsiteContactSchema,
  GitHubContactSchema,
  LinkedInContactSchema,
]);

export const PersonalInfoSchema = z.object({
  name: z.string({ error: "Name is required" })
    .min(1, { error: "Name can not be empty" }),
  location: z.string({ error: "Location is required" })
    .min(1, { error: "Location can not be empty" }),
  description: z.string({ error: "Description is required" })
    .min(1, { error: "Description can not be empty" }),
  contact: z.array(ContactSchema, {
    error: "Contact list is required",
  }).optional(),
});

