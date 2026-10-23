import { createFileRoute } from "@tanstack/react-router";
import { HomePage, pageHead } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Home",
      "VAAYUSH GROUP OF COMPANIES brings together enterprise, real estate development, construction, and meaningful business opportunities.",
    ),
  component: HomePage,
});
