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
    expect(result).toContain('(type: "linkedin", text: "linkedin.com/in/test")');
  });

  it("should escape special characters in name", () => {
    const contacts: Contact[] = [
      { id: 1, type: "Email", value: 'test "quoted" @example.com' }
    ];
    const result = Header("John # Doe", contacts);
    expect(result).toContain('"John \\# Doe"');
    expect(result).toContain('(type: "email", text: "test \\"quoted\\" @example.com")');
  });
});
