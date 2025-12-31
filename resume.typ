#import "lib.typ": *

#set text(font: font-main, size: size-body, fill: text-dark)

#header(
  "Mohamed Yessine Bouajila",
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
#paragraph[
  Dedicated and detail-oriented Software Engineer with a passion for building scalable web applications. Experienced in modern JavaScript frameworks and cloud architecture. Proven track record of collaborating in agile teams to deliver high-quality software solutions.
]

#section("Education")
#experience(
  title: "Institute of Mathematics and Computer Science of Monastir (ISIMM)",
  titleRole: "BS in Computer Science",
  location: "Monastir, Tunisia",
  date: "Sept 2022 – June 2025",
  description: ("Focused on core engineering principles and software development."),
  tags: ("Algorithms", "Data Structures", "C/C++", "Java", "SQL")
)

#section("Experience")
#experience(
  title: "Google",
  titleRole: "Software Engineer",
  location: "Mountain View, CA",
  date: "2022 – Present",
  description: (
    "- Developed cool features",
    "- Fixed many bugs",
  ),
  tags: ("Python", "Typst", "Rust")
)

#section("Projects")
#experience(
  title: "GreenBoard",
  titleRole: "Full-stack Developer",
  linkUrl: "https://greenboard.tn",
  description: (
    "- Developed a full-stack web platform for GreenBoard venture.",
    "- Implemented a client-facing system for requesting custom PCB hardware.",
    "- Deployed the platform on Vercel and integrated transactional email workflows.",
  ),
  tags: ("React", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Vercel")
)

#section("Skills")
#one_liners((
  [*Dev Languages:* #("JavaScript", "TypeScript", "SQL", "Python", "Java", "C").join(", ")],
  [*Technologies:* #("React", "Next.js", "Express", "Node", "PostgreSQL", "Docker", "Git").join(", ")],
  [*Soft Skills:* #("Leadership", "Listening", "Problem Solving", "Critical Thinking").join(", ")],
  [*Languages:* #("English (Upper-Intermediate)", "French (Intermediate)", "Arabic (Native)").join(", ")]
))

#section("Certifications")
#one_liners((
  (text: "Foundations of Project Management (Google)", date: "Sept 2025"),
  (text: "Operating Systems and You Becoming a Power User (Google)", date: "Aug 2024"),
  (text: "The Bits and Bytes of Computer Networking (Google)", date: "Aug 2024"),
  (text: "Technical Support Fundamentals (Google)", date: "Aug 2024"),
))

#section("Extracurricular")
#experience(
  title: "Code Bey Isimm",
  titleRole: "Chairman",
  date: "Oct 2023 – June 2024",
  description: (
    "- Managed training programs for members and new students.",
    "- Secured funding and sponsorships for events and workshops.",
  )
)

#section("Hobbies")
#one_liners((
  ("Photography, Hiking, Cooking, Chess"),
))
