import { Skills } from "../../../types/skills.type";
import { typstEscape } from "../../utils/escape";

function SkillsBlock(skills: Skills): string {
  const formatSkill = (item: { name: string }) => typstEscape(item.name);

  // Define the parts we want to display
  const parts: string[] = [];

  if (skills.languages && skills.languages.length > 0) {
    parts.push(`[*Languages*: ${skills.languages.map(formatSkill).join(", ")}]`);
  }

  if (skills.technologies && skills.technologies.length > 0) {
    parts.push(`[*Technologies*: ${skills.technologies.map(formatSkill).join(", ")}]`);
  }

  if (skills.softSkills && skills.softSkills.length > 0) {
    parts.push(`[*Soft Skills*: ${skills.softSkills.map(formatSkill).join(", ")}]`);
  }

  // If no skills exist at all, return an empty string to avoid broken Typst syntax
  if (parts.length === 0) return "";

  return `
#one_liner((
  ${parts.join(",\n  ")}
))
`;
}

export { SkillsBlock };
