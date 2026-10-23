import { createFileRoute } from "@tanstack/react-router";
import { ConstructionPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/construction")({
  head: () =>
    pageHead(
      "Construction Projects",
      "Explore VAAYUSH BUILDER's construction approach and capabilities, without unverified project claims.",
    ),
  component: ConstructionPage,
});
