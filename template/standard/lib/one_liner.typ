#import "../config.typ": *

#let one_liner(items) = {
  v(-4pt, weak: true)

  pad(left: padding)[
    #stack(
    dir: ttb, 
    spacing: 6pt, 
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
]
  v(-4pt, weak: true)
}
