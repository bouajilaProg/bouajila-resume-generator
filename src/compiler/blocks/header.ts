import { Contact } from "../../../types/personalInfo.type";

function Header(Name: string, contacts: Contact[]): string {
  const FormatedContacts = contacts.map(contact => `(type: "${contact.type}", text: "${contact.value}")`);
  return `#header("${Name}",( ${FormatedContacts.join(", ")} ))`;
}


export { Header };
