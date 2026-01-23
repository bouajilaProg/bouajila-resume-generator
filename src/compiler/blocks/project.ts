import { Project } from "../../../types/project.type";

function ProjectBlock(project: Project): string {
  const tags = project.tools.split(",").map(t => t.trim());
  const links = project.projectLink ? `"${project.projectLink}"` : "none";
  return `#experience(
  title: "${project.title}",
  titleRole: "",
  description: "${project.description}",
  location: "",
  date: "",
  linkUrl: ${links},
  tags: (${tags.map(t => `"${t}"`).join(", ")})
)`;
}

export { ProjectBlock };
