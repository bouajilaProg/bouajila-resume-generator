import { Contact } from "../../../types/personalInfo.type";
import { WorkExperience } from "../../../types/experience.type";
import { EducationItem } from "../../../types/education.type";
import { Project } from "../../../types/project.type";
import { Skills } from "../../../types/skills.type";
import { Certification } from "../../../types/certif.type";
import * as blocks from "../blocks/";

export class ResumeBuilder {
  private parts: string[] = [];

  // skip if any of the vals is null or undefined
  private skipIfNull(...vals: any[]) {
    return vals.some(v => v == null);
  }

  setBase() {
    this.parts.push(blocks.Base());
    return this;
  }

  setHeader(name?: string, contacts?: Contact[]) {
    if (this.skipIfNull(name, contacts)) return this;
    this.parts.push(blocks.Header(name!, contacts!));
    return this;
  }

  addProfile(userSummary?: string) {
    if (this.skipIfNull(userSummary)) return this;
    this.parts.push(blocks.sectionTitle("Profile"));
    this.parts.push(blocks.Profile(userSummary!));
    return this;
  }

  addExperience(experiences?: WorkExperience[]) {
    if (this.skipIfNull(experiences)) return this;

    // section header
    this.parts.push(blocks.sectionTitle("Experience"));
    experiences!.forEach(exp => {
      this.parts.push(blocks.ExperienceBlock(exp));
    });
    return this;
  }

  addEducations(educations?: EducationItem[]) {
    if (this.skipIfNull(educations)) return this;

    this.parts.push(blocks.sectionTitle("Education"));
    educations!.forEach(edu => {
      this.parts.push(blocks.EducationBlock(edu));
    });
    return this;
  }

  addProjects(projects?: Project[]) {
    if (this.skipIfNull(projects)) return this;

    this.parts.push(blocks.sectionTitle("Projects"));
    projects!.forEach(proj => {
      this.parts.push(blocks.ProjectBlock(proj));
    });
    return this;
  }

  addSkills(skills?: Skills) {
    if (this.skipIfNull(skills)) return this;

    this.parts.push(blocks.sectionTitle("Skills"));
    this.parts.push(blocks.SkillsBlock(skills!));
    return this;
  }

  addCertifications(certifications?: Certification[]) {
    if (this.skipIfNull(certifications) || certifications!.length === 0) return this;

    this.parts.push(blocks.sectionTitle("Certifications"));
    certifications!.forEach(cert => {
      this.parts.push(blocks.CertificationBlock(cert));
    });
    return this;
  }

  build(): string {
    return this.parts.join("\n\n");
  }
}

