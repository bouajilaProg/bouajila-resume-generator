import { Certification } from "../../../types/certif.type";

function CertificationBlock(cert: Certification): string {
  // Wrapping the name in * for bolding as per your requirements
  return `(text: [*${cert.name}* (${cert.issuingOrganization})], date: "${cert.issueDate}")`;
}

export { CertificationBlock };
