
#let ICONS = (
  location: (path: "location.svg", size: 10pt),
  email:    (path: "mail.svg",     size: 9pt),
  tel:      (path: "phone.svg",    size: 9pt),
  website:  (path: "website.svg",  size: 10pt),
  github:   (path: "github.svg",   size: 11pt),
  linkedin: (path: "linkedin.svg", size: 11pt),
)

#let icon(name) = {
  if name in ICONS {
    let icon = ICONS.at(name)
    box(
      baseline: 25%,
      image(
        icon.path,
        width: icon.size,
        height: icon.size,
      )
    )
  } else {
    ""
  }
}

