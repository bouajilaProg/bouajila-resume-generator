import { Contact } from "../../../types/personalInfo.type";

function Header(Name: string, contacts: Contact[]): string {
  const FormatedContacts = contacts.map(contact => `(type: "${contact.type.toLowerCase()}", text: "${contact.value}")`);

  const res = `#header(
  "${Name}",
  (
    ${FormatedContacts.join(",\n    ")}
)
)`;

  return res;

}


export { Header };
