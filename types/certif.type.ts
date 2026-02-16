import { z } from "zod";

// certifications info
interface Certification {
  id: number;
  name: string;
  issuingOrganization: string;
  issueDate: string;
}

export type { Certification };

// --- Zod Schemas ---

export const CertificationSchema = z.object({
  id: z.int({ error: "Certification id must be a whole number" }),
  name: z.string({ error: "Certification name is required" })
    .min(1, { error: "Certification name can not be empty" }),
  issuingOrganization: z.string({ error: "Issuing organization is required" })
    .min(1, { error: "Issuing organization can not be empty" }),
  issueDate: z.string({ error: "Issue date is required" })
    .min(1, { error: "Issue date can not be empty" }),
});
