import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, pageHead } from "@/components/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { category?: string | undefined } => {
    const category = search["category"];
    return { category: typeof category === "string" ? category : undefined };
  },
  head: () =>
    pageHead(
      "Contact Us",
      "Contact VAAYUSH GROUP OF COMPANIES in Palghar, Maharashtra by phone, email, or enquiry.",
    ),
  component: ContactPage,
});
