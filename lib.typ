#import "icons.typ":icon 
#let primary-color = rgb("#3A7CA5") 



#let header(name, contacts) = {
  set align(center)
  v(2pt)
  text(fill: primary-color, weight: 700, size: 22pt)[#name]
  v(-8pt) 
  block(width: 100%, align(center)[
    #contacts.map(contact => {
      box(inset: (x: 4pt))[
        #stack(dir: ltr, spacing: 4pt,
          icon(contact.type),
          align(horizon, text(size: 8.5pt, fill: primary-color,
            if "link" in contact and contact.link != none { link(contact.link)[#contact.text] } else { contact.text }
          ))
        )
      ]
    }).join(h(2pt) + text(fill: gray.lighten(60%), size: 8pt)[|] + h(2pt))
  ])
}

#let section(title) = {
  v(6pt)
  grid(
    columns: (auto, 1fr),
    align: horizon,
    gutter: 8pt,
    text(fill: primary-color, weight: 700, size: 11pt, upper(title)),
    line(length: 100%, stroke: 0.5pt + primary-color.lighten(30%))
  )
  v(-2pt)
}

#let profile(content) = {
  set par(justify: true)
  text(size: 9pt, fill: rgb("#444444"))[#content]
}

#let education(degreeType: "", degreeName: "", institution: "", startDate: "", endDate: "", keywords: ()) = {
  v(2pt)
  grid(
    columns: (1fr, auto),
    [
      *#degreeType* #institution \
      #text(size: 9pt, fill: rgb("#555555"))[#degreeName]
      #if keywords.len() > 0 {
        v(-2pt)
        text(size: 8pt, fill: primary-color.lighten(20%), weight: 500)[Key Skills: #keywords.join(", ")]
      }
    ],
    [#text(size: 9pt, fill: rgb("#555555"))[#startDate – #endDate]]
  )
}

