import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    pageHead(
      "Disclaimer",
      "Read disclosures about general website information and the proposed VAAYUSH PRIME SQUARE concept.",
    ),
  component: () => <LegalPage page="disclaimer" />,
});
