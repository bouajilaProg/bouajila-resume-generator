import { Resume } from "../../types/resumeItem.type";
import { SectionType } from "../../types/resumeItem.type"; // Ensure SectionType is exported and imported
import mock2 from "./mock2.json";

// const mockResume: Resume = {
//   name: "Mock Resume",
//   description: "A mock resume for development",
//   lastUpdate: new Date().toISOString(),
//   ...mock2,
// } as any;
//
//

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
  },

  sections: [
    {
      type: SectionType.Education,
      body: [
        {
          id: 1,
          degreeType: "BS",
          degreeName: "Computer Science",
          summary: "Graduated with Honors, GPA: 3.8/4.0",
          highlights: ["Dean's List 2017-2019", "Thesis on Distributed Hash Tables"],
          institution: "University of California, Berkeley",
          startDate: "2015",
          endDate: "2019",
          keySkills: "Data Structures, Algorithms",
        },
        {
          id: 2,
          degreeType: "MS",
          degreeName: "Software Engineering",
          summary: "Specialized in Distributed Systems",
          highlights: ["Research assistant for Cloud Computing lab"],
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
          highlights: [
            "Architected a microservices-based system reducing latency by 40%",
            "Mentored junior developers and improved code review quality",
          ],
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
          summary: "A high-performance online store built with modern technologies.",
          highlights: ["Test note", "Full-featured online store...", "Full-featured online store..."],
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
      type: SectionType.Languages,
      body: [
        { id: 14, name: "English", proficiency: "Fluent" },
        { id: 15, name: "Spanish", proficiency: "Advanced" },
      ],
    },
    {
      type: SectionType.Hobbies,
      body: [
        { id: 12, name: "Open Source" },
        { id: 13, name: "Photography" },
      ],
    },
  ],
};

export default mockResume;
