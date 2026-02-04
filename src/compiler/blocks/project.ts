import { Project } from "../../../types/project.type";

function ProjectBlock(project: Project): string {
  // Map tags to quoted strings for Typst array syntax
  const tags = project.tools.split(",").map(t => `"${t.trim()}"`).join(", ");

  // Format description: Map notes to quoted strings for Typst array syntax
  // This allows the Typst function to see multiple items and render a list
  const descriptionItems = project.notes.map(note => `"${note.replace(/"/g, '\\"')}"`).join(", ");

  const linkUrl = project.projectLink ? `"${project.projectLink}"` : "none";

  return `experience(
  title: "${project.title}",
  titleRole: "",
  description: (${descriptionItems}),
  location: "",
  date: "",
  linkUrl: ${linkUrl},
  tags: (${tags})
)`;
}

export { ProjectBlock };
