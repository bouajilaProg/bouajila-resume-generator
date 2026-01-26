#import "../config.typ": *

#let paragraph(content) = {
  v(-16pt)
  pad(left: 0pt)[
    #set par(justify: true)
    #text(size: size-body, fill: text-dark)[#content]
  ]
  v(-4pt)
}
