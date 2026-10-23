# VAAYUSH Group corporate website

## Experience
Build the complete responsive corporate website described in the supplied brief: Home, About Us, Our Businesses, VAAYUSH PRIME SQUARE, Construction Projects, Careers, Partnerships, Contact Us, Privacy Policy, Terms & Conditions, and Disclaimer.

Use the supplied VAAYUSH logo in the site header and footer and derive the visual palette from its navy blue and gold, supported by warm ivory, white, charcoal, and restrained neutrals. Refine the balance and contrast to make the system cohesive while keeping the identity architectural and premium. Pair a refined display face with a readable sans-serif. Keep the editorial presentation restrained, accessible, and completely gradient-free. Use the supplied company details and copy; do not invent credentials, project evidence, approvals, testimonials, social accounts, or a WhatsApp number. No company photography is present, so use clearly illustrative imagery rather than presenting generated visuals as completed VAAYUSH work.

## Visitor journeys
Add shared desktop/mobile navigation and footer, with working links across all pages. Keep all three business divisions equally prominent. Provide project disclosures that clearly label Prime Square as proposed and its features as potential/proposed. Present construction capabilities without fictional portfolio entries.

Create the careers application interface with required fields, resume selection (PDF/DOC/DOCX), validation, and consent. Create the universal enquiry form with the brief's categories and allow page-specific links to preselect a category. Since the brief explicitly excludes a functioning backend, forms must not claim submission or resume delivery; show a clear not-connected/error state instead of a fabricated success. Link approved phone and email details, and omit WhatsApp until a number is approved. Use placeholder/confirmation language for legal details requiring review.

## Technical approach
Replace the root placeholder with the Home page and implement each content page as a TanStack file route with its own page metadata. Add shared site navigation/footer and focused reusable form/page elements, preserving the existing stack and design tokens. Use the supplied logo as a site asset and create a matching favicon. Keep all functionality frontend-only; do not add authentication, persistence, or email delivery. Record the route/component structure decision in the root `AGENTS.md` before implementation is complete.

Improve performance through appropriately sized and modern-format project images, lazy-loading below-the-fold imagery, reserving image dimensions to avoid layout shifts, and keeping route-specific code/assets scoped to pages that need them. Avoid unnecessary dependencies and heavy animation.

## Verification
Check all route links and page-specific enquiry selections; exercise form validation, resume type checks, and the honest unconnected state. Review desktop, tablet, and mobile layouts, keyboard access, route-specific metadata, image loading/layout stability, and the no-gradient rule.
