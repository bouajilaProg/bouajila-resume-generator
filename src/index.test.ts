import { describe, it, expect } from "vitest";
import { compile, generateTypstSource } from "./index";
import mockResume from "./mocks/mockResume";

describe("bouajila-resume-generator integration", () => {
  it("should generate Typst source string", () => {
    const source = generateTypstSource(mockResume);
    expect(source).toContain("#header");
    expect(source).toContain("Jane Developer");
    expect(source).toContain("Experience");
  });

  it("should compile to PDF buffer (if typst is available)", async () => {
    const result = await compile(mockResume);
    
    if (!result.success) {
      if (result.error.message.includes("Typst not found")) {
        console.warn("Skipping PDF compilation test: Typst not found");
        return;
      }
      throw result.error;
    }

    expect(result.data.buffer).toBeDefined();
    expect(result.data.buffer instanceof Buffer).toBe(true);
    expect(result.data.buffer!.length).toBeGreaterThan(0);
  }, 30000); // Higher timeout for compilation

  it("should handle a minimal resume (no contacts, no sections)", async () => {
    const minimalResume = {
      name: "Minimal Resume",
      description: "A minimal resume test",
      lastUpdate: "2025",
      personalInfo: {
        name: "Minimal",
        location: "Nowhere",
        description: "Minimal desc"
      }
    };
    const result = await compile(minimalResume as any);
    
    if (!result.success) {
      if (result.error.message.includes("Typst not found")) return;
      throw result.error;
    }

    expect(result.data.buffer).toBeDefined();
    expect(result.data.buffer!.length).toBeGreaterThan(0);
  }, 30000);
});
