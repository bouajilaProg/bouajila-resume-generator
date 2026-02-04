#import "../config.typ": *

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
  
  // Logic: Check if description exists, then decide between plain text or list
  if description != () and description != "" and description != none {
    let desc-items = if type(description) == str { (description,) } else { description }
    
    if desc-items.len() == 1 {
      // Single item: Render as standard text
      left-items.push(desc-items.at(0))
    } else {
      // Multiple items: Render as a bulleted list
      left-items.push(
        list(..desc-items, tight: true)
      )
    }
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
    
  pad(left: padding)[
      #grid(
        columns: (1fr, auto),
        row-gutter: 5pt,
        ..for i in range(max-rows) {
          (
            if i < left-items.len() { left-items.at(i) } else { [] },
            if i < right-items.len() { align(right)[#right-items.at(i)] } else { [] }
          )
        }
      )
    ]
    v(3pt, weak: true)
  }
}
