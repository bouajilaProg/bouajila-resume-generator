#import "../config.typ": *
#import "../../commun/icons/icons.typ": icon

#let header(name, contacts) = {
  let contacts_list = if type(contacts) == array { contacts } else { (contacts,) }
  // Filter out empty items
  contacts_list = contacts_list.filter(c => c != none)
  
  set align(center)
  v(2pt)
  text(fill: primary-color, weight: 700, size: size-name)[#name]
  
  if contacts_list.len() > 0 {
    v(header-v-offset)
    
    block(width: 100%, align(center)[
      #contacts_list.map(contact => {
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
}
