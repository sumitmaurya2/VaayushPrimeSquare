import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "Terms & Conditions",
      "Review the draft website terms for VAAYUSH GROUP OF COMPANIES.",
    ),
  component: () => <LegalPage page="terms" />,
});
