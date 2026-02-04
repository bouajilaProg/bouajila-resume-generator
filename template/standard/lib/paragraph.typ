#import "../config.typ": *
#let paragraph(content) = {
  
  pad(left: padding)[
    #set par(justify: true)
    #text(size: size-body, fill: text-dark)[#content]
  ]
}
