import { WorkExperience } from "../../../types/experience.type";

function ExperienceBlock(experience: WorkExperience): string {
  const date = `${experience.startDate} - ${experience.endDate}`;
  const tags = experience.keywords.split(",").map(k => k.trim());
  const description = experience.summary;

  return `

  #experience(
  title: "${experience.jobTitle}",
  titleRole: "${experience.company}",
  description: "${description}",
  location: "${experience.location}",
  date: "${date}",
  tags: (${tags.map(t => `"${t}"`).join(",  ")})
)`;
}

export { ExperienceBlock };
