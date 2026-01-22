import { Certification } from "../../../types/certif.type";

function CertificationBlock(cert: Certification): string {
  return `#experience(
    title: "${cert.name}",
    titleRole: "${cert.issuingOrganization}",
    date: "${cert.issueDate}",
    location: none,
    linkUrl: none,
    tags: ()
  )`;
}

export { CertificationBlock };
