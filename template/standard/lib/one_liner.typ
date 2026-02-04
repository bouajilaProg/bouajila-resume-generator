
#import "../config.typ": *

#let one_liner(items) = {
  // Ensure 'items' is always a list/array
  let items_list = if type(items) == array { items } else { (items,) }
  
  v(-4pt, weak: true)

  pad(left: padding)[
    #stack(
      dir: ttb, 
      spacing: 6pt, 
      ..items_list.map(it => {
        if type(it) == dictionary {
          grid(
            columns: (1fr, auto),
            align: (bottom + left, bottom + right),
            [#it.at("text", default: "")],
            [#it.at("date", default: "")]
          )
        } else {
          [#it]
        }
      })
    )
  ]
  v(-4pt, weak: true)
}
