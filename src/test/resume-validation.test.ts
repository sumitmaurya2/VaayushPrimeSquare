import { describe, expect, it } from "vitest";
import { RESUME_MAX_SIZE_BYTES, validateResumeFile } from "@/lib/resume-validation";

describe("resume validation", () => {
  it("requires a resume file", () => {
    expect(validateResumeFile(null)).toBe(
      "Please choose a PDF, DOC, or DOCX resume before continuing.",
    );
  });

  it.each(["resume.pdf", "resume.doc", "resume.docx"])("accepts %s", (name) => {
    expect(validateResumeFile({ name, size: 100 })).toBeNull();
  });

  it("rejects unsupported formats", () => {
    expect(validateResumeFile({ name: "resume.png", size: 100 })).toBe(
      "That file type is not supported. Choose a PDF, DOC, or DOCX resume.",
    );
  });

  it("allows a 5 MB resume", () => {
    expect(validateResumeFile({ name: "resume.pdf", size: RESUME_MAX_SIZE_BYTES })).toBeNull();
  });

  it("rejects a resume larger than 5 MB", () => {
    expect(validateResumeFile({ name: "resume.pdf", size: RESUME_MAX_SIZE_BYTES + 1 })).toBe(
      "Your resume is larger than 5 MB. Please choose a smaller file.",
    );
  });
});
