/**
 * Escapes strings for safe use in Typst.
 * Handles double quotes, backslashes, hashtag prefixes,
 * and content mode delimiters (brackets, stars, underscores, dollars).
 */
export function typstEscape(str: string | undefined): string {
  if (!str) return "";
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, "\\\"")
    .replace(/#/g, "\\#")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\*/g, "\\*")
    .replace(/_/g, "\\_")
    .replace(/\$/g, "\\$");
}
