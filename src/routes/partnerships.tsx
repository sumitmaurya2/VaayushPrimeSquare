import { createFileRoute } from "@tanstack/react-router";
import { PartnershipsPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/partnerships")({
  head: () =>
    pageHead(
      "Partnerships",
      "Explore relevant opportunities to work with VAAYUSH GROUP OF COMPANIES.",
    ),
  component: PartnershipsPage,
});
