import { WorkExperience } from "../../../types/experience.type";
import { typstEscape } from "../../utils/escape";

function ExperienceBlock(experience: WorkExperience): string {
  const date = `${typstEscape(experience.startDate)} - ${typstEscape(experience.endDate)}`;
  const tags = experience.keywords.split(",").map(k => typstEscape(k.trim()));
  
  const summary = experience.summary ? `"${typstEscape(experience.summary)}"` : "none";
  const highlights = experience.highlights 
    ? `(${experience.highlights.map(h => `"${typstEscape(h)}"`).join(", ")})`
    : "()";

  return `
  experience(
  title: "${typstEscape(experience.jobTitle)}",
  titleRole: "${typstEscape(experience.company)}",
  summary: ${summary},
  highlights: ${highlights},
  location: "${typstEscape(experience.location)}",
  date: "${date}",
  tags: (${tags.map(t => `"${t}"`).join(",  ")})
)`.trim();
}

export { ExperienceBlock };
