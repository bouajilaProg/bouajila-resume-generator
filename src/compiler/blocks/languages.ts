import { Languages } from "../../../types/languages.type";

function LanguagesBlock(languages: Languages): string {
  const languageList = languages.map(l => {
    if (l.proficiency) {
      return `${l.name} (${l.proficiency})`;
    }
    return l.name;
  }).join(", ");

  return `
#one_liner(([${languageList}]))
`.trim();
}

export { LanguagesBlock };
