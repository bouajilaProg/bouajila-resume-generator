import { Resume } from "../../../types/resumeItem.type";
import { SectionType } from "../../../types/resumeItem.type"; // Ensure SectionType is exported and imported

const mockResume: Resume = {
  name: "Jane Developer",
  description: "Full-Stack Developer specializing in React & Node.js",
  template: "basic-resume",
  lastUpdate: "2025",

  personalInfo: {
    name: "Jane Developer",
    location: "San Francisco, CA (Remote-friendly)",
    description:
      "Experienced Full-Stack Developer with 5+ years building scalable web applications.",
    contact: [
      { id: 1, type: "Email", value: "jane.developer@example.com" },
      { id: 2, type: "Phone", value: "+1 (555) 123-4567" },
    ],
    hobbies: ["Open Source", "Photography"],
    languages: ["English (Native)", "Spanish (Professional)"],
  },

  sections: [
    {
      type: SectionType.Education,
      body: [
        {
          id: 1,
          degreeType: "BS",
          degreeName: "Computer Science",
          description: "Graduated with Honors, GPA: 3.8/4.0",
          institution: "University of California, Berkeley",
          startDate: "2015",
          endDate: "2019",
          keySkills: "Data Structures, Algorithms",
        },
        {
          id: 2,
          degreeType: "MS",
          degreeName: "Software Engineering",
          description: "Specialized in Distributed Systems",
          institution: "Stanford University",
          startDate: "2019",
          endDate: "2021",
          keySkills: "Microservices, Cloud Computing",
        },
      ],
    },
    {
      type: SectionType.WorkExperience,
      body: [
        {
          id: 3,
          jobTitle: "Senior Full-Stack Developer",
          company: "TechCorp Inc.",
          location: "San Francisco, CA (Remote)",
          startDate: "2022",
          endDate: "Present",
          summary: "Lead development of enterprise SaaS platform...",
          keywords: "React, TypeScript, Node.js",
        },
      ],
    },
    {
      type: SectionType.Project,
      body: [
        {
          id: 4,
          title: "E-Commerce Platform",
          notes: ["Full-featured online store..."],
          tools: "React, TypeScript, Node.js",
          projectLink: "https://github.com/janedev/ecommerce-platform",
        },
      ],
    },
    {
      type: SectionType.Skills,
      body: {
        languages: [
          { id: 5, type: "LANG", name: "TypeScript" },
          { id: 6, type: "LANG", name: "JavaScript" },
        ],
        technologies: [
          { id: 7, type: "TECH", name: "React" },
          { id: 8, type: "TECH", name: "Node.js" },
        ],
        softSkills: [
          { id: 9, type: "SOFT", name: "Leadership & Mentoring" },
        ],
      },
    },
    {
      type: SectionType.Certification,
      body: [
        {
          id: 10,
          name: "AWS Certified Solutions Architect",
          issuingOrganization: "Amazon Web Services",
          issueDate: "2023",
        },
      ],
    },
    {
      type: SectionType.ExtraCurricular,
      body: [
        {
          id: 11,
          activityName: "Mentor - Women Who Code",
          startDate: "2022",
          endDate: "Present",
        },
      ],
    },
  ],
};

export default mockResume;
