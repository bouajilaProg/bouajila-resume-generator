import { describe, it, expect } from "vitest";
import { Header } from "./header";
import { Contact } from "../../../types/personalInfo.type";

describe("Header", () => {
  it("should generate correct Typst code for header", () => {
    const contacts: Contact[] = [
      { id: 1, type: "Email", value: "test@example.com" },
      { id: 2, type: "LinkedIn", value: "linkedin.com/in/test" }
    ];
    const result = Header("John Doe", contacts);
    expect(result).toContain('"John Doe"');
    expect(result).toContain('(type: "email", text: "test@example.com")');
    expect(result).toContain('(type: "linkedin", text: "linkedin.com/in/test", link: "https://linkedin.com/in/test")');
  });

  it("should escape special characters in name", () => {
    const contacts: Contact[] = [
      { id: 1, type: "Email", value: 'test "quoted" @example.com' }
    ];
    const result = Header("John # Doe", contacts);
    expect(result).toContain('"John \\# Doe"');
    expect(result).toContain('(type: "email", text: "test \\"quoted\\" @example.com")');
  });

  it("should work with empty contacts", () => {
    const result = Header("Jane Doe", []);
    expect(result).toBe('#header("Jane Doe", ())');
  });

  it.each([
    ["https://github.com/janedev", "https://github.com/janedev"],
    ["github.com/janedev", "https://github.com/janedev"],
    ["janedev", "https://github.com/janedev"],
    ["@janedev", "https://github.com/janedev"],
  ])("should link the GitHub contact %s to its profile", (value, link) => {
    const result = Header("Jane Doe", [{ id: 1, type: "GitHub", value }]);
    expect(result).toContain(`(type: "github", text: "${value}", link: "${link}")`);
  });

  it.each([
    ["https://www.linkedin.com/in/janedev", "https://www.linkedin.com/in/janedev"],
    ["linkedin.com/in/janedev", "https://linkedin.com/in/janedev"],
    ["www.linkedin.com/in/janedev", "https://www.linkedin.com/in/janedev"],
    ["janedev", "https://linkedin.com/in/janedev"],
    ["@janedev", "https://linkedin.com/in/janedev"],
  ])("should link the LinkedIn contact %s to its profile", (value, link) => {
    const result = Header("Jane Doe", [{ id: 1, type: "LinkedIn", value }]);
    expect(result).toContain(`(type: "linkedin", text: "${value}", link: "${link}")`);
  });

  it.each([
    ["https://domain.com", "domain.com", "https://domain.com/"],
    ["https://domain.com/portfolio?lang=en", "domain.com", "https://domain.com/portfolio?lang=en"],
    ["domain.com", "domain.com", "https://domain.com/"],
    ["http://domain.com", "domain.com", "http://domain.com/"],
  ])("should display the domain and link to %s", (value, display, link) => {
    const result = Header("Jane Doe", [{ id: 1, type: "Website", value }]);
    expect(result).toContain(`(type: "website", text: "${display}", link: "${link}")`);
  });
});
