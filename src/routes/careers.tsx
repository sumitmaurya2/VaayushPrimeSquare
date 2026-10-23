import { createFileRoute } from "@tanstack/react-router";
import { CareersPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/careers")({
  head: () =>
    pageHead(
      "Careers",
      "Share your profile and resume to explore relevant career opportunities with VAAYUSH GROUP OF COMPANIES.",
    ),
  component: CareersPage,
});
