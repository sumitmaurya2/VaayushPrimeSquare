import { createFileRoute } from "@tanstack/react-router";
import { pageHead, PrimeSquarePage } from "@/components/site";

export const Route = createFileRoute("/prime-square")({
  head: () =>
    pageHead(
      "VAAYUSH PRIME SQUARE",
      "Learn about the proposed VAAYUSH PRIME SQUARE residential concept in Palghar, Maharashtra.",
    ),
  component: PrimeSquarePage,
});
