#import "config.typ": *
#import "../commun/icons/icons.typ": icon

// --- Page Setup ---
#set page(
  margin: page-margins,
  paper: "us-letter"
)

// --- 1. Header ---
#let header(name, contacts) = {
  set align(center)
  v(2pt)
  text(fill: primary-color, weight: 700, size: size-name)[#name]
  v(header-v-offset)
  block(width: 100%, align(center)[
    #contacts.map(contact => {
      box(inset: (x: 4pt))[
        #stack(dir: ltr, spacing: 4pt,
          icon(contact.type),
          align(horizon, text(size: size-subtext, fill: primary-color,
            if "link" in contact and contact.link != none { link(contact.link)[#contact.text] } 
            else { contact.text }
          ))
        )
      ]
    }).join(
      h(2pt) + text(fill: primary-color, size: size-tiny)[|] + h(2pt)
    )
  ])
}

// --- 2. Section Heading ---
#let section(title) = {
  v(section-spacing)
  grid(
    columns: (auto, 1fr),
    align: horizon,
    gutter: 4pt,
    text(fill: primary-color, weight: 700, size: size-section-title, upper(title)),
    move(dy: 0.35em, line(length: 100%, stroke: 1pt + primary-color.lighten(30%)))
  )
  v(4pt)
}
// --- 3. Experience Item ---
#let experience(
  title: "", 
  titleRole: "", 
  description: (), 
  location: none, 
  date: none, 
  linkUrl: none,
  tags: ()
) = {
  v(item-spacing + 2pt, weak: true)
  grid(
    columns: (1fr, auto),
    gutter: 5pt, 
    stack(dir: ttb, spacing: 4pt,
      [*#title* #h(5pt) #text(fill: text-medium)[#titleRole]],
      {
        let desc-items = if type(description) == str { (description,) } else { description }
        if desc-items.len() == 1 {
          v(1pt)
          text(size: size-body, fill: text-dark)[#desc-items.at(0)]
        } else if desc-items.len() > 1 {
          set list(indent: 8pt, marker: [•], spacing: 5pt)
          text(size: size-body, fill: text-dark)[
            #for item in desc-items {
              let clean-item = if type(item) == str { item.trim("-").trim() } else { item }
              list.item(clean-item)
            }
          ]
        }
      },
      if tags.len() > 0 {
        v(2pt)
        text(size: size-body, fill: primary-color.lighten(10%))[
          *#if type(tags) == str { tags } else { tags.join(", ") }*
        ]
      }
    ),
    align(right)[
      #set text(size: size-tiny)
      #stack(
        dir: ttb,
        spacing: 3pt,
        if location != none { text(weight: 600, fill: text-dark)[#location] },
        if date != none { text(fill: text-medium)[#date] },
        if linkUrl != none {
          let displayLink = linkUrl.replace("https://", "").replace("http://", "")
          text(fill: primary-color)[#link(linkUrl)[#displayLink]]
        }
      )
    ]
  )
  v(2pt)
}// --- 4. Paragraph Item ---
#let paragraph(content) = {
  pad(left: 8pt)[
    #set par(justify: true)
    #text(size: size-body, fill: text-dark)[#content]
  ]
}
#let one_liners(items) = {
  pad(left: 8pt)[
    #stack(
      dir: ttb, 
      spacing: 6pt, 
      ..items.map(it => {
        if type(it) == "dictionary" or type(it) == dictionary {
          grid(
            columns: (1fr, auto),
            align: (bottom + left, bottom + right),
            // eval converts the string into bold/markup
            [• #eval(it.text, mode: "markup")], 
            [#it.date]
          )
        } else {
          [• #it]
        }
      })
    )
  ]
}


