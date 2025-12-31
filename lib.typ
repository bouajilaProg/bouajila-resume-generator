#import "config.typ": *
#import "icons.typ": icon

// --- Page Setup ---
#set page(
  margin: page-margins,
  paper: "us-letter", 
)


// --- Functions ---

#let header(name, contacts) = {
  set align(center)
  v(2pt)
  // Removed font-header, now uses the global font-main
  text(fill: text-dark, weight: 700, size: size-name)[#name]
  v(header-v-offset) 
  block(width: 100%, align(center)[
    #contacts.map(contact => {
      box(inset: (x: 4pt))[
        #stack(dir: ltr, spacing: 4pt,
          icon(contact.type),
          align(horizon, text(size: size-subtext, fill: primary-color,
            if "link" in contact and contact.link != none { link(contact.link)[#contact.text] } else { contact.text }
          ))
        )
      ]
    }).join(h(2pt) + text(fill: primary-color, size: size-tiny)[|] + h(2pt))
  ])
}

#let section(title) = {
  v(section-spacing)
  grid(
    columns: (auto, 1fr),
    align: horizon,
    gutter: 8pt,
    text(fill: primary-color, weight: 700, size: size-section-title, upper(title.at(0)) + title.slice(1)) ,
    line(length: 100%, stroke: 0.5pt + primary-color.lighten(30%))
  )
  v(-2pt)
}

#let profile(content) = {
  pad(left: 8pt)[
    #set par(justify: true)
    #text(size: size-body, fill: text-dark)[#content]
  ]
}

#let education(degreeType: "", degreeName: "", institution: "", startDate: "", endDate: "", keywords: ()) = {
  v(2pt)
  pad(left: 8pt)[
    #grid(
      columns: (1fr, auto),
      [
        *#degreeType* #institution \
        #text(size: size-body, fill: text-medium)[#degreeName]
        #if keywords.len() > 0 {
          v(-2pt)
          text(size: size-tiny, fill: primary-color.lighten(20%), weight: 500)[Key Skills: #keywords.join(", ")]
        }
      ],
      [#text(size: size-body, fill: text-medium)[#startDate – #endDate]]
    )
  ]
}

#let experience(company: "", role: "", location: "", startDate: "", endDate: none, summary: "", keywords: ()) = {
  v(item-spacing)
  pad(left: 8pt)[
    #grid(
      columns: (1fr, auto),
      gutter: 10pt,
      [
        *#company* #h(5pt) #text(fill: text-medium)[#role] \
        #v(-2pt)
        #text(size: size-body, fill: text-dark)[#summary]
        #if keywords.len() > 0 {
          v(-2pt)
          text(size: size-tiny, fill: primary-color.lighten(20%), weight: 500)[Technologies: #keywords.join(", ")]
        }
      ],
      align(right)[
        #text(size: size-body, weight: 500)[#location] \
        #v(-2pt)
        #text(size: size-tiny, fill: text-light)[#startDate – #(if endDate == none or endDate == "" { "Present" } else { endDate })]
      ]
    )
  ]
}

#let project(title: "", description: [], tools: "", projectLink: none, repoLink: none) = {
  v(item-spacing)
  pad(left: 8pt)[
    #let displayLink = if projectLink != none {
      projectLink.replace("https://", "").replace("http://", "")
    } else if repoLink != none {
      repoLink.split("/").slice(-2).join("/") 
    } else { none }
    
    #let target = if projectLink != none { projectLink } else { repoLink }

    #grid(
      columns: (1fr, auto),
      [
        *#title*
        #v(-4pt)
        #text(size: size-body, fill: text-dark)[
          #set list(indent: 6pt, marker: [•], spacing: 4pt)
          #description
        ]
        #v(-4pt)
        #text(size: size-body)[
          Tools & Technologies: #text(fill: text-medium)[#tools]
        ]
      ],
      align(right)[
        #if target != none {
          text(size: size-tiny, fill: primary-color)[#link(target)[#displayLink]]
        }
      ]
    )
  ]
}

// --- Skills Grouping ---
#let skill_item(category: "", items: ()) = {
  grid(
    columns: (80pt, 1fr),
    text(weight: 600, size: size-body)[#category:],
    text(size: size-body, fill: text-dark)[#items.join(", ")]
  )
}

#let skills_group(..items) = {
  pad(left: 8pt)[
    #stack(dir: ttb, spacing: 4pt, ..items)
  ]
}

// --- Certification Grouping ---
#let cert_item(name, issuing, date) = {
  grid(
    columns: (1fr, auto),
    align: (left, right),
    [*#issuing*: #name],
    [#date]
  )
}

#let certifications_group(..items) = {
  pad(left: 8pt)[
    #stack(dir: ttb, spacing: 4pt, ..items)
  ]
}

#let hobbies(items: ()) = {
  v(2pt)
  pad(left: 8pt)[
    #text(items.join(", "), size: size-body)
  ]
}

#let Extracurr(title: "", description: [], startDate: none, endDate: none) = {
  v(item-spacing)
  pad(left: 8pt)[
    #grid(
      columns: (1fr, auto),
      [
        *#title*
        #v(-4pt)
        #text(size: size-body, fill: text-dark)[
          #set list(indent: 6pt, marker: [•], spacing: 4pt)
          #description
        ]
        #v(-4pt)
      ],
      align(right)[
        #text(size: size-tiny, fill: text-dark)[#startDate – #(if endDate == none or endDate == "" { "Present" } else { endDate })]
      ]
    )
  ]
}
