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
        #stack(
          dir: ltr, 
          spacing: 4pt,
          icon(contact.type), 
          align(horizon, text(size: size-subtext, fill: primary-color,
            if "link" in contact and contact.link != none { 
              link(contact.link)[#contact.text] 
            } else { 
              contact.text 
            }
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
    text(fill: primary-color, weight: 700, size: size-section-title, upper(title)),
    move(dy: 0.35em,dx: 0.2em, line(length: 100%, stroke: 1pt + primary-color.lighten(30%)))
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
  let item-spacing = 2pt
  let text-medium = black
  let text-dark = black
  let size-tiny = 8pt
  v(item-spacing + 2pt, weak: true)
  
  let left-items = ()
  
  if title != "" or titleRole != "" {
    left-items.push([
      *#title* #if titleRole != "" { h(5pt) + text(fill: text-medium, weight: "regular")[#titleRole] }
    ])
  }
  
  if description != () and description != "" and description != none {
    let desc-items = if type(description) == str { (description,) } else { description }
    left-items.push(
      list(..desc-items, tight: true)
    )
  }
  
  if tags != () and tags != none and tags != "" {
    let tag-display = if type(tags) == str { tags } else { tags.join(" • ") }
    left-items.push(text(size: size-tiny, fill: primary-color)[
      #tag-display
    ])
  }
  
  let right-items = ()
  
  if location != none and location != "" {
    right-items.push(text(size: size-tiny, weight: 600, fill: text-dark)[#location])
  }
  
  if date != none and date != "" {
    right-items.push(text(size: size-tiny, fill: text-medium)[#date])
  }
  
  if linkUrl != none and linkUrl != "" {
    let displayLink = linkUrl.replace("https://", "").replace("http://", "")
    right-items.push(text(size: size-tiny, fill: primary-color)[#link(linkUrl)[#displayLink]])
  }
  
  if left-items.len() > 0 or right-items.len() > 0 {
    let max-rows = calc.max(left-items.len(), right-items.len())
    
    grid(
      columns: (1fr, auto),
      row-gutter: 5pt,
      ..for i in range(max-rows) {
        (
          if i < left-items.len() { left-items.at(i) } else { [] },
          if i < right-items.len() { align(right)[#right-items.at(i)] } else { [] }
        )
      }
    )
    v(3pt)
  }
}

// --- 4. Paragraph Item ---
#let paragraph(content) = {
  v(-16pt)
  pad(left: 0pt)[
    #set par(justify: true)
    #text(size: size-body, fill: text-dark)[#content]
  ]
  v(-4pt)
}

// --- 5. One Liners Item ---
#let one_liner(items) = {
  v(-4pt)
  stack(
    dir: ttb, 
    spacing: 8pt, 
    ..items.map(it => {
      if type(it) == dictionary {
        grid(
          columns: (1fr, auto),
          align: (bottom + left, bottom + right),
          [#it.text],
          [#it.date]
        )
      } else {
        [#it]
      }
    })
  )
  v(-4pt)
}
