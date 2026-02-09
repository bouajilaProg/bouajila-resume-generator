import { describe, it, expect } from "vitest";
import { Profile } from "./profile";

describe("Profile", () => {
  it("should generate correct Typst code for profile", () => {
    const summary = "Experienced dev";
    const result = Profile(summary);
    expect(result).toContain('#paragraph("Experienced dev")');
  });

  it("should escape special characters in profile", () => {
    const summary = 'Summary with "quotes" and #hashtag';
    const result = Profile(summary);
    expect(result).toContain('#paragraph("Summary with \\"quotes\\" and \\#hashtag")');
  });
});
