export const RESUME_MAX_SIZE_BYTES = 5 * 1024 * 1024;

export function validateResumeFile(file: Pick<File, "name" | "size"> | null): string | null {
  if (!file) return "Please choose a PDF, DOC, or DOCX resume before continuing.";
  if (!/\.(pdf|doc|docx)$/i.test(file.name)) {
    return "That file type is not supported. Choose a PDF, DOC, or DOCX resume.";
  }
  if (file.size > RESUME_MAX_SIZE_BYTES) {
    return "Your resume is larger than 5 MB. Please choose a smaller file.";
  }
  return null;
}
