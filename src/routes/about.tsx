import { createFileRoute } from "@tanstack/react-router";
import { AboutPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Us",
      "Discover the vision, mission, approach, and leadership of VAAYUSH GROUP OF COMPANIES.",
    ),
  component: AboutPage,
});
