#import "../config.typ": *

#let section(title) = {
  v(section-spacing, weak: true)
  grid(
    columns: (auto, 1fr),
    align: horizon,
    text(fill: primary-color, weight: 700, size: size-section-title, upper(title)),
    move(dy: 0.35em,dx: 0.1em, line(length: 100%, stroke: 1pt + primary-color.lighten(30%)))
  )
  v(4pt, weak: true)
}
