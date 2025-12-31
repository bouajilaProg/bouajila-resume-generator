#import "lib.typ": *

#set text(font: font-main, size: size-body, fill: text-dark)

#header(
  "Bouajila Mohamed Yessine",
  (
    (type: "location", text: "Bizerte, Tunisia"),
    (type: "email",    text: "bouajilamedyessine@gmail.com", link: "mailto:bouajilamedyessine@gmail.com"),
    (type: "tel",      text: "+216 28 747 707",               link: "tel:+21628747707"),
    (type: "github",   text: "bouajilaProg",                 link: "https://github.com/bouajilaProg"),
    (type: "linkedin", text: "Bouajila-med-yessine",         link: "https://linkedin.com/in/bouajila-med-yessine"),
    (type: "website",  text: "bouajilaProg.com",              link: "https://bouajilaProg.com")
  )
)

#section("Profile")
#profile[
  Dedicated and detail-oriented Software Engineer with a passion for building scalable web applications. Experienced in modern JavaScript frameworks and cloud architecture. Proven track record of collaborating in agile teams to deliver high-quality software solutions.
]

#section("Education")
#education(
  degreeType: "BS",
  degreeName: "Bachelor in Computer Science",
  institution: "Institute of Mathematics and Computer Science of Monastir (ISIMM)",
  startDate: "Sept 2022",
  endDate: "June 2025",
  keywords: ("Algorithms", "Data Structures", "C/C++", "Java", "SQL")
)

#section("Experience")
#experience(
  company: "Tech Solutions",
  role: "Fullstack Intern",
  location: "Tunis, Tunisia",
  startDate: "June 2024",
  endDate: none,
  summary: "Developed a real-time dashboard using React and Node.js.",
  keywords: ("React", "Node.js", "PostgreSQL")
)

#section("Projects")
#project(
  title: "GreenBoard",
  projectLink: "https://greenboard.tn",
  repoLink: "https://github.com/bouajilaProg/greenboard",
  tools: "React, PostgreSQL, Drizzle ORM, HTML, Tailwind CSS, Git, Vercel, Resend",
  description: [
    - Developed a full-stack web platform for GreenBoard venture.
    - Implemented a client-facing system for requesting custom PCB hardware.
    - Deployed the platform on Vercel and integrated transactional email workflows.
  ]
)

#section("Skills")

#skills_group(
  skill_item(
    category: "Dev Languages",
    items: ("JavaScript", "TypeScript", "SQL", "Python", "tailwind", "Java", "HTML", "C", "PHP", "C#")
  ),
  skill_item(
    category: "Technologies",
    items: ("React", "Next.js", "Express", "Node", "PostgreSQL", "Docker", "Git", "Linux", "YOLO", "Mongodb", "Dotnet", "Unity")
  ),
  skill_item(
    category: "Soft Skills",
    items: ("Leadership", "Listening", "Problem Solving", "Critical Thinking")
  ),
  skill_item(
    category: "Languages",
    items: ("English (Upper-Intermediate)", "French (Intermediate)", "Arabic (Native)")
  )
)
#section("Certifications")

#certifications_group(
  cert_item("Foundations of Project Management", "Google", "Sept 2025"),
  cert_item("Operating Systems and You Becoming a Power User", "Google", "Aug 2024"),
  cert_item("The Bits and Bytes of Computer Networking", "Google", "Aug 2024"),
  cert_item("Technical Support Fundamentals", "Google", "Aug 2024"),
)
#section("Extracurricular")
#Extracurr(title: "Chairman of the Code Bey Isimm",
description: [
  - Managed training programs for members and new students.,
  - Secured funding and sponsorships for events and workshops.
],
startDate: "Oct 2023",
endDate: "June 2024")


#section("Hobbies")
#hobbies(items: ("Photography", "Hiking", "Cooking", "Chess"))



