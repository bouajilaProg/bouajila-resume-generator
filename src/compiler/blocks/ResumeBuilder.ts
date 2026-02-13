import * as blocks from "../blocks/";
import { Contact } from "../../../types/personalInfo.type";
import { WorkExperience } from "../../../types/experience.type";
import { EducationItem } from "../../../types/education.type";
import { Project } from "../../../types/project.type";
import { Skills } from "../../../types/skills.type";
import { Certification } from "../../../types/certif.type";
import { ExtraCurricularActivity } from "../../../types/extraCurr.type";
import { Hobbies } from "../../../types/hobbies.type";
import { Languages } from "../../../types/languages.type";
import { ResumeSection, SectionType } from "../../../types/resumeItem.type";
import { typstEscape } from "../../utils/escape";

export class ResumeBuilder {
  private parts: string[] = [];

  private isEmpty(val: unknown): boolean {
    if (val == null) return true;
    if (Array.isArray(val) && val.length === 0) return true;
    return false;
  }

  private addListSection<T>(
    title: string,
    data: T[] | undefined,
    blockFn: (item: T) => string,
    stackSpacing = "1.5em"
  ) {
    if (this.isEmpty(data) || !data) return this;

    const isSingle = data.length === 1;
    this.parts.push(
      blocks.sectionTitle(title),
      blocks.spacing(0.4),
      isSingle
        ? `#${blockFn(data[0])}`
        : `#stack(spacing: ${stackSpacing}, ${data.map(blockFn).join(",\n")})`,
      blocks.spacing(isSingle ? 0.6 : 1)
    );
    return this;
  }

  private addOneLinerSection<T>(
    title: string,
    data: T[] | undefined,
    blockFn: (item: T) => string
  ) {
    if (this.isEmpty(data) || !data) return this;
    const isSingle = data.length === 1;
    this.parts.push(
      blocks.sectionTitle(title),
      blocks.spacing(0.4),
      `#one_liner((\n  ${data.map(blockFn).join(",\n  ")}\n))`,
      blocks.spacing(isSingle ? 0.6 : 1)
    );
    return this;
  }

  setBase() {
    this.parts.push(blocks.Base());
    return this;
  }

  setHeader(name?: string, contacts?: Contact[]) {
    if (this.isEmpty(name) || this.isEmpty(contacts)) return this;
    this.parts.push(blocks.Header(name!, contacts!), blocks.spacing(1));
    return this;
  }

  addProfile(userSummary?: string) {
    if (this.isEmpty(userSummary)) return this;
    this.parts.push(
      blocks.sectionTitle("Profile"),
      blocks.Profile(userSummary!)
    );
    return this;
  }

  addExperience(exp?: WorkExperience[]) {
    return this.addListSection("Experience", exp, blocks.ExperienceBlock, "1em");
  }

  addEducations(edu?: EducationItem[]) {
    return this.addListSection("Education", edu, blocks.EducationBlock);
  }

  addProjects(proj?: Project[]) {
    return this.addListSection("Projects", proj, blocks.ProjectBlock);
  }

  addSkills(skills?: Skills) {
    if (this.isEmpty(skills) || !skills) return this;
    if (this.isEmpty(skills.languages) && this.isEmpty(skills.technologies) && this.isEmpty(skills.softSkills)) return this;
    this.parts.push(
      blocks.sectionTitle("Skills"),
      blocks.spacing(0.4),
      blocks.SkillsBlock(skills),
      blocks.spacing(1)
    );
    return this;
  }

  addLanguages(languages?: Languages) {
    if (this.isEmpty(languages) || !languages) return this;
    this.parts.push(
      blocks.sectionTitle("Spoken Languages"),
      blocks.spacing(0.4),
      blocks.LanguagesBlock(languages),
      blocks.spacing(0.6)
    );
    return this;
  }

  addHobbies(hobbies?: Hobbies) {
    if (this.isEmpty(hobbies) || !hobbies) return this;
    this.parts.push(
      blocks.sectionTitle("Hobbies"),
      blocks.spacing(0.4),
      blocks.HobbiesBlock(hobbies),
      blocks.spacing(0.6)
    );
    return this;
  }

  addCertifications(certs?: Certification[]) {
    return this.addOneLinerSection("Certifications", certs, blocks.CertificationBlock);
  }

  addExtracurriculars(extras?: ExtraCurricularActivity[]) {
    return this.addOneLinerSection("Extracurriculars", extras, blocks.ExtraCurrBlock);
  }

  private sectionHandlers: Record<string, (body: any) => ResumeBuilder> = {
    [SectionType.WorkExperience]: (body) => this.addExperience(body),
    [SectionType.Education]: (body) => this.addEducations(body),
    [SectionType.Project]: (body) => this.addProjects(body),
    [SectionType.Skills]: (body) => this.addSkills(body),
    [SectionType.Certification]: (body) => this.addCertifications(body),
    [SectionType.ExtraCurricular]: (body) => this.addExtracurriculars(body),
    [SectionType.Hobbies]: (body) => this.addHobbies(body),
    [SectionType.Languages]: (body) => this.addLanguages(body),
  };

  addSection(section: ResumeSection) {
    const handler = this.sectionHandlers[section.type];
    if (handler) {
      return handler(section.body);
    }
    return this;
  }

  build(): string {
    return this.parts.join("\n");
  }
}
