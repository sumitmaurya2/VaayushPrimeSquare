import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy Policy",
      "Review the draft privacy information for VAAYUSH GROUP OF COMPANIES.",
    ),
  component: () => <LegalPage page="privacy" />,
});
