import { Project } from "../../../types/project.type";
import { typstEscape } from "../../utils/escape";

function ProjectBlock(project: Project): string {
  // Map tags to quoted strings for Typst array syntax
  const tags = project.tools 
    ? project.tools.split(",").map(t => `"${typstEscape(t.trim())}"`).join(", ")
    : "";

  const summary = project.summary ? `"${typstEscape(project.summary)}"` : "none";
  const highlights = project.highlights 
    ? `(${project.highlights.map(h => `"${typstEscape(h)}"`).join(", ")})`
    : "()";

  const linkUrl = project.projectLink ? `"${typstEscape(project.projectLink)}"` : "none";

  return `experience(
  title: "${typstEscape(project.title)}",
  titleRole: "",
  summary: ${summary},
  highlights: ${highlights},
  location: "",
  date: "",
  linkUrl: ${linkUrl},
  tags: (${tags})
)`;
}

export { ProjectBlock };
