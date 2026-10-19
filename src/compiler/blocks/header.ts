import { Contact } from "../../../types/personalInfo.type";
import { typstEscape } from "../../utils/escape";

function Header(Name: string, contacts: Contact[]): string {
  if (contacts.length === 0) {
    return `#header("${typstEscape(Name)}", ())`;
  }

  const FormatedContacts = contacts.map(contact => {
    const type = contact.type.toLowerCase();
    if (type === "website") {
      const url = new URL(
        /^https?:\/\//i.test(contact.value) ? contact.value : `https://${contact.value}`
      );
      return `(type: "website", text: "${typstEscape(url.host)}", link: "${typstEscape(url.href)}")`;
    }
    if (type === "github" || type === "linkedin") {
      const value = contact.value.trim();
      const domain = type === "github" ? "github.com" : "linkedin.com";
      const profilePath = type === "github" ? "" : "in/";
      const withoutWww = value.replace(/^www\./i, "");
      const link = /^https?:\/\//i.test(value)
        ? value
        : withoutWww.toLowerCase().startsWith(`${domain}/`)
          ? `https://${value}`
          : `https://${domain}/${profilePath}${value.replace(/^@/, "")}`;
      return `(type: "${type}", text: "${typstEscape(contact.value)}", link: "${typstEscape(link)}")`;
    }
    return `(type: "${typstEscape(type)}", text: "${typstEscape(contact.value)}")`;
  });

  const res = `#header(
  "${typstEscape(Name)}",
  (
    ${FormatedContacts.join(",\n    ")}
  )
)`;

  return res;
}

export { Header };
