#import "lib.typ": *

#set page(paper: "a4", margin: (x: 1.5cm, y: 1.5cm))
#set text(font: "Inter", size: 10pt, fill: rgb("#333333"))

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

