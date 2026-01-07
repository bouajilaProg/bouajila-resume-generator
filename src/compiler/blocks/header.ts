interface Contact {
  type: string;
  text: string;
}


function Header(Name: string, contacts: Contact[]): string {
  const FormatedContacts = contacts.map(contact => `(type: "${contact.type}", text: "${contact.text}")`);
  return `#header("${Name}",( ${FormatedContacts.join(", ")} ))`;
}


export { Header, Contact };
