import { createFileRoute } from "@tanstack/react-router";
import { BusinessesPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/businesses")({
  head: () =>
    pageHead(
      "Our Businesses",
      "Explore VAAYUSH Enterprises, VAAYUSH Developer, and VAAYUSH Builder.",
    ),
  component: BusinessesPage,
});
