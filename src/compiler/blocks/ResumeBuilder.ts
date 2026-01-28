import { Contact } from "../../../types/personalInfo.type";
import { WorkExperience } from "../../../types/experience.type";
import { EducationItem } from "../../../types/education.type";
import { Project } from "../../../types/project.type";
import { Skills } from "../../../types/skills.type";
import { Certification } from "../../../types/certif.type";
import { ExtraCurricularActivity } from "../../../types/extraCurr.type";
import { Hobbies } from "../../../types/hobbies.type";
import { Languages } from "../../../types/languages.type";
import * as blocks from "../blocks/";
import { ResumeSection, SectionType } from "types/resumeItem.type";

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

  addLanguages(languages?: Languages) {
    if (this.skipIfNull(languages) || languages!.length === 0) return this;
    this.parts.push(blocks.sectionTitle("Spoken Languages"));
    this.parts.push(blocks.LanguagesBlock(languages!));
    return this;
  }

  addHobbies(hobbies?: Hobbies) {
    if (this.skipIfNull(hobbies) || hobbies!.length === 0) return this;
    this.parts.push(blocks.sectionTitle("Hobbies"));
    this.parts.push(blocks.HobbiesBlock(hobbies!));
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

  addExtracurriculars(extracurriculars?: ExtraCurricularActivity[]) {
    if (this.skipIfNull(extracurriculars) || extracurriculars!.length === 0) return this;
    this.parts.push(blocks.sectionTitle("Extracurriculars"));
    const activityItems = extracurriculars!.map(act => blocks.ExtraCurrBlock(act));
    const itemsStr = activityItems.length === 1 ? `${activityItems[0]}` : activityItems.join("\n");
    this.parts.push(itemsStr);
    return this;
  }

  addSection(section: ResumeSection) {
    switch (section.type) {
      case SectionType.WorkExperience:
        this.addExperience(section.body);
        break;

      case SectionType.Education:
        this.addEducations(section.body);
        break;

      case SectionType.Project:
        this.addProjects(section.body);
        break;

      case SectionType.Skills:
        this.addSkills(section.body);
        break;

      case SectionType.Certification:
        this.addCertifications(section.body);
        break;

      case SectionType.ExtraCurricular:
        this.addExtracurriculars(section.body);
        break;

      case SectionType.Hobbies:
        this.addHobbies(section.body);
        break;

      case SectionType.Languages:
        this.addLanguages(section.body);
        break;

      default:
        const _exhaustiveCheck: never = section;
        console.error("Unknown section detected", _exhaustiveCheck);
        break;
    }
    return this;
  }
  build(): string {
    return this.parts.join("\n\n");
  }
}

