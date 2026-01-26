#import "config.typ": *
#import "lib/header.typ": header
#import "lib/section.typ": section
#import "lib/experience.typ": experience
#import "lib/paragraph.typ": paragraph
#import "lib/one_liner.typ": one_liner

// --- Page Setup ---
#set page(
  margin: page-margins,
  paper: "us-letter"
)

// Export all elements
#let elements = (
  header: header,
  section: section,
  experience: experience,
  paragraph: paragraph,
  one_liner: one_liner
)
