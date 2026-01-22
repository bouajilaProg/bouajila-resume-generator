import { Project } from "../../../types/project.type";

function ProjectBlock(project: Project): string {
  const tags = project.tools.split(",").map(t => t.trim());
  let links = [];
  if (project.projectLink) links.push(project.projectLink);
  if (project.repoLink) links.push(project.repoLink);
  const linkUrl = links.length > 0 ? links.join(" | ") : "none";

  return `#experience(
  title: "${project.title}",
  titleRole: "",
  description: "${project.description}",
  location: "",
  date: "",
  linkUrl: "${linkUrl}",
  tags: (${tags.map(t => `"${t}"`).join(", ")})
)`;
}

export { ProjectBlock };
