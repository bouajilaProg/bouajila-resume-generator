import { Resume } from "../../../types/resumeItem.type";

const mockResume: Resume = {
  name: "Jane Developer",
  description: "Full-Stack Developer specializing in React & Node.js",
  template: "basic-resume",
  lastUpdate: "2025",

  personalInfo: {
    name: "Jane Developer",
    location: "San Francisco, CA (Remote-friendly)",
    description:
      "Experienced Full-Stack Developer with 5+ years building scalable web applications. Passionate about clean code, performance optimization, and user experience.",
    contact: [
      { id: 1, type: "Email", value: "jane.developer@example.com" },
      { id: 2, type: "Phone", value: "+1 (555) 123-4567" },
      { id: 3, type: "GitHub", value: "github.com/janedev" },
      { id: 4, type: "LinkedIn", value: "linkedin.com/in/janedev" },
      { id: 5, type: "Website", value: "janedev.com" },
    ],
    hobbies: ["Open Source", "Technical Writing", "Photography", "Hiking"],
  },

  educations: [
    {
      id: 1,
      degreeType: "BS",
      degreeName: "Computer Science",
      description: "Graduated with Honors, GPA: 3.8/4.0",
      institution: "University of California, Berkeley",
      startDate: "2015",
      endDate: "2019",
      keySkills: "Data Structures, Algorithms, Software Engineering, Database Systems",
    },
    {
      id: 2,
      degreeType: "MS",
      degreeName: "Software Engineering",
      description: "Specialized in Distributed Systems and Cloud Architecture",
      institution: "Stanford University",
      startDate: "2019",
      endDate: "2021",
      keySkills: "Microservices, Cloud Computing, System Design, Scalability",
    },
  ],

  experiences: [
    {
      id: 1,
      jobTitle: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      startDate: "2022",
      endDate: "Present",
      summary:
        "Lead development of enterprise SaaS platform serving 50,000+ users. Architected microservices and implemented CI/CD pipelines. Mentored junior developers and conducted code reviews.",
      keywords: "React TypeScript Node.js PostgreSQL AWS Docker Kubernetes",
    },
    {
      id: 2,
      jobTitle: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      startDate: "2020",
      endDate: "2022",
      summary:
        "Built MVP for B2B marketplace using React and Express. Optimized database queries reducing response time by 40%. Implemented real-time features with WebSockets.",
      keywords: "React Express MongoDB Redis WebSocket",
    },
    {
      id: 3,
      jobTitle: "Junior Developer",
      company: "WebAgency Co.",
      location: "New York, NY",
      startDate: "2019",
      endDate: "2020",
      summary:
        "Developed responsive web applications for 20+ clients. Collaborated with design team to implement pixel-perfect UIs. Maintained legacy codebases and implemented new features.",
      keywords: "HTML CSS JavaScript jQuery Bootstrap",
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with product catalog, shopping cart, payment processing, and admin dashboard. Handles 10,000+ daily transactions.",
      tools: "React, TypeScript, Node.js, PostgreSQL, Stripe API, AWS S3",
      projectLink: "https://github.com/janedev/ecommerce-platform",
    },
    {
      id: 2,
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, file sharing, and team analytics. Built for remote teams.",
      tools: "Next.js, NestJS, PostgreSQL, Redis, Docker, Socket.io",
      projectLink: "https://github.com/janedev/task-manager",
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description:
        "CLI tool to generate professional portfolio websites from YAML configuration. Supports multiple templates and themes.",
      tools: "TypeScript, Node.js, YAML, Handlebars, GitHub Actions",
      projectLink: "https://github.com/janedev/portfolio-gen",
    },
  ],

  skills: {
    languages: [
      { id: 1, type: "LANG", name: "TypeScript" },
      { id: 2, type: "LANG", name: "JavaScript" },
      { id: 3, type: "LANG", name: "Python" },
      { id: 4, type: "LANG", name: "SQL" },
      { id: 5, type: "LANG", name: "Go" },
    ],
    technologies: [
      { id: 6, type: "TECH", name: "React" },
      { id: 7, type: "TECH", name: "Next.js" },
      { id: 8, type: "TECH", name: "Node.js" },
      { id: 9, type: "TECH", name: "NestJS" },
      { id: 10, type: "TECH", name: "PostgreSQL" },
      { id: 11, type: "TECH", name: "MongoDB" },
      { id: 12, type: "TECH", name: "Redis" },
      { id: 13, type: "TECH", name: "Docker" },
      { id: 14, type: "TECH", name: "Kubernetes" },
      { id: 15, type: "TECH", name: "AWS" },
    ],
    softSkills: [
      { id: 16, type: "SOFT", name: "Leadership & Mentoring" },
      { id: 17, type: "SOFT", name: "Problem Solving" },
      { id: 18, type: "SOFT", name: "Communication" },
      { id: 19, type: "SOFT", name: "Agile/Scrum" },
      { id: 20, type: "SOFT", name: "Code Review" },
    ],
  },

  extracurriculars: [
    {
      id: 1,
      activityName: "Open Source Contributor - React Ecosystem",
      startDate: "2020",
      endDate: "Present",
    },
    {
      id: 2,
      activityName: "Tech Blog Writer - Medium & Dev.to",
      startDate: "2021",
      endDate: "Present",
    },
    {
      id: 3,
      activityName: "Mentor - Women Who Code",
      startDate: "2022",
      endDate: "Present",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Associate",
      issuingOrganization: "Amazon Web Services",
      issueDate: "2023",
    },
    {
      id: 2,
      name: "Certified Kubernetes Administrator (CKA)",
      issuingOrganization: "Cloud Native Computing Foundation",
      issueDate: "2024",
    },
    {
      id: 3,
      name: "MongoDB Certified Developer",
      issuingOrganization: "MongoDB University",
      issueDate: "2022",
    },
  ],
};

export default mockResume;
