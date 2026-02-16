import { EducationItem } from "../../../types/education.type";
import { typstEscape } from "../../utils/escape";

function EducationBlock(education: EducationItem): string {
  const date = `${typstEscape(education.startDate)} - ${typstEscape(education.endDate)}`;
  const tags = education.keySkills 
    ? education.keySkills.split(",").map((k: string) => typstEscape(k.trim()))
    : [];

  const summary = education.summary ? `"${typstEscape(education.summary)}"` : "none";
  const highlights = education.highlights 
    ? `(${education.highlights.map(h => `"${typstEscape(h)}"`).join(", ")})`
    : "()";

  return `experience(
  title: "${typstEscape(education.degreeName)}",
  titleRole: "${typstEscape(education.institution)}",
  summary: ${summary},
  highlights: ${highlights},
  location: "",
  date: "${date}",
  tags: (${tags.map((t: string) => `"${t}"`).join(", ")})
)`;
}

export { EducationBlock };
