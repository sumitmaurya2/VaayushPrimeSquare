import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation, useSearch } from "@tanstack/react-router";
import logoFallback from "@/assets/vaayush-logo-fallback.png";
import primeSquareImage from "@/assets/prime-square-concept.webp";
import collaborationImage from "@/assets/business-collaboration.webp";
import constructionImage from "@/assets/construction-capabilities.webp";
import { Button } from "@/components/ui/button";
import { validateResumeFile } from "@/lib/resume-validation";
import {
  FounderFeature,
  FounderSignature,
  LeadershipSection,
  TeamSection,
} from "@/components/team";

const mainLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Businesses", "/businesses"],
  ["Careers", "/careers"],
  ["Partnerships", "/partnerships"],
] as const;

const divisions = [
  {
    name: "VAAYUSH ENTERPRISES",
    category: "Manpower Services & Job Consultancy",
    description:
      "Connecting organisations with talent and helping individuals explore suitable professional opportunities through a service-oriented approach.",
    enquiry: "Manpower / Job Consultancy",
    label: "Explore Enterprises",
  },
  {
    name: "VAAYUSH DEVELOPER",
    category: "Real Estate Management & Development",
    description:
      "Exploring real estate and development opportunities with an emphasis on thoughtful planning, functional spaces, and long-term value.",
    enquiry: "Real Estate / Property",
    label: "Explore Developer",
  },
  {
    name: "VAAYUSH BUILDER",
    category: "Construction",
    description:
      "Focused on construction opportunities, practical execution, quality-conscious working practices, and responsible project delivery.",
    enquiry: "Construction",
    label: "Explore Builder",
  },
];

const enquiryCategories = [
  "Manpower / Job Consultancy",
  "Real Estate / Property",
  "Construction",
  "VAAYUSH PRIME SQUARE",
  "Business Partnership",
  "General Enquiry",
  "Other",
];

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} | VAAYUSH GROUP OF COMPANIES`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

function BrandLogo({ className, eager = false }: { className?: string; eager?: boolean }) {
  return (
    <img
      className={className}
      src={logoFallback}
      alt=""
      width="64"
      height="64"
      loading={eager ? undefined : "lazy"}
    />
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const location = useLocation();
  const projectsRef = useRef<HTMLDetailsElement>(null);
  const mobileRef = useRef<HTMLDetailsElement>(null);
  const projectsActive = ["/prime-square", "/construction"].includes(location.pathname);

  // Close the dropdown and mobile menu after navigating, on Escape, and on outside click.
  useEffect(() => {
    projectsRef.current?.removeAttribute("open");
    mobileRef.current?.removeAttribute("open");
  }, [location.pathname, location.searchStr]);
  useEffect(() => {
    const closeAll = () => {
      projectsRef.current?.removeAttribute("open");
      mobileRef.current?.removeAttribute("open");
    };
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeAll();
    const onClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (projectsRef.current && !projectsRef.current.contains(target)) {
        projectsRef.current.removeAttribute("open");
      }
      if (mobileRef.current && !mobileRef.current.contains(target)) {
        mobileRef.current.removeAttribute("open");
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand-lockup" to="/" aria-label="VAAYUSH Group of Companies home">
            <BrandLogo eager />
            <span className="brand-name">
              VAAYUSH<span>GROUP OF COMPANIES</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {mainLinks.slice(0, 3).map(([label, href]) => (
              <Link key={href} to={href}>
                {label}
              </Link>
            ))}
            <details className="nav-projects" ref={projectsRef} data-active={projectsActive}>
              <summary>Projects</summary>
              <div className="nav-dropdown">
                <Link to="/prime-square">VAAYUSH PRIME SQUARE</Link>
                <Link to="/construction">Construction Projects</Link>
              </div>
            </details>
            {mainLinks.slice(3).map(([label, href]) => (
              <Link key={href} to={href}>
                {label}
              </Link>
            ))}
            <Link className="contact-nav" to="/contact">
              Contact Us
            </Link>
          </nav>
          <details className="mobile-menu" ref={mobileRef}>
            <summary aria-label="Open navigation menu">
              Menu <span aria-hidden="true">☰</span>
            </summary>
            <nav className="mobile-menu-panel" aria-label="Mobile navigation">
              {mainLinks.map(([label, href]) => (
                <Link key={href} to={href}>
                  {label}
                </Link>
              ))}
              <Link to="/prime-square">VAAYUSH PRIME SQUARE</Link>
              <Link to="/construction">Construction Projects</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </details>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <BrandLogo />
              <div>
                <strong>VAAYUSH GROUP</strong>
                <span>OF COMPANIES</span>
              </div>
            </div>
            <p className="footer-copy">
              Building Dreams. Creating Opportunities. Shaping Tomorrow.
            </p>
            <p className="footer-copy">
              Palghar, Maharashtra, India
              <br />
              <a href="tel:+918173834966">+91 8173834966</a>
              <br />
              <a href="mailto:ayushmaurya123890@gmail.com">ayushmaurya123890@gmail.com</a>
            </p>
          </div>
          <nav className="footer-links" aria-label="Website pages">
            {[
              ...mainLinks,
              ["VAAYUSH PRIME SQUARE", "/prime-square"],
              ["Construction Projects", "/construction"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <Link key={href} to={href}>
                {label}
              </Link>
            ))}
          </nav>
          <nav className="footer-links" aria-label="Business divisions and legal">
            {divisions.map((division) => (
              <Link key={division.name} to="/contact" search={{ category: division.enquiry }}>
                {division.name}
              </Link>
            ))}
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VAAYUSH GROUP OF COMPANIES</span>
          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="display-heading">{title}</h1>
        {children && <div>{children}</div>}
      </div>
    </section>
  );
}

export function ContentSection({
  title,
  children,
  tone = "light",
  id,
}: {
  title: string;
  children: ReactNode;
  tone?: "light" | "white" | "blue";
  id?: string;
}) {
  return (
    <section className={`content-section section-${tone}`} id={id}>
      <div className="site-container content-grid">
        <h2 className="display-heading">{title}</h2>
        <div className="content-copy">{children}</div>
      </div>
    </section>
  );
}

export function ContactPrompt({
  title = "Start a Conversation with VAAYUSH",
  children = "Tell us what you are looking for, and we will help direct your enquiry to the appropriate team.",
  category,
}: {
  title?: string;
  children?: string;
  category?: string;
}) {
  return (
    <section className="section section-blue">
      <div className="site-container">
        <div className="section-heading">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2 className="display-heading">{title}</h2>
          <p className="muted-on-blue">{children}</p>
          <Link className="button-outline" to="/contact" search={{ category }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img
          src={primeSquareImage}
          alt="Contemporary residential architecture surrounded by landscaped gardens"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
        <div className="home-hero-content">
          <span className="eyebrow">VISION · INNOVATION · EXCELLENCE</span>
          <h1 className="display-heading">
            Building Dreams. Creating Opportunities. Shaping Tomorrow.
          </h1>
          <p>
            VAAYUSH GROUP OF COMPANIES brings together a vision for enterprise, real estate
            development, construction, and meaningful business opportunities under one unified
            identity.
          </p>
          <div className="hero-actions">
            <Link className="button-link" to="/businesses">
              Explore Our Businesses
            </Link>
            <Link className="button-outline" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <span className="image-note">Architectural concept illustration</span>
      </section>
      <section className="section section-light">
        <div className="site-container intro-grid">
          <h2 className="display-heading">A Vision That Goes Beyond Business</h2>
          <div className="intro-copy">
            <p>
              We believe that a business is more than a name, a building, or a commercial
              enterprise. It is an opportunity to create value, empower people, strengthen
              communities, and contribute to a better future.
            </p>
            <p>
              VAAYUSH aspires to develop a diversified business ecosystem guided by professionalism,
              responsible growth, meaningful relationships, and a long-term perspective.
            </p>
            <Link className="text-link" to="/about">
              Discover VAAYUSH <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">OUR BUSINESSES</span>
            <h2 className="display-heading">Three Divisions. One Shared Vision.</h2>
          </div>
          <div className="division-grid">
            {divisions.map((d) => (
              <article className="division-item" key={d.name}>
                <h3>{d.name}</h3>
                <div className="category">{d.category}</div>
                <p>{d.description}</p>
                <Link className="text-link" to="/contact" search={{ category: d.enquiry }}>
                  {d.label} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="project-feature">
        <img
          src={primeSquareImage}
          alt="Architectural visualization of a landscaped residential community concept"
          width="1536"
          height="1024"
          loading="lazy"
        />
        <div className="project-copy">
          <span className="eyebrow">FEATURED DEVELOPMENT · PROPOSED</span>
          <h2 className="display-heading">VAAYUSH PRIME SQUARE</h2>
          <p>
            A New Perspective on Modern Living. A proposed residential development concept
            associated with the VAAYUSH vision in Palghar, Maharashtra.
          </p>
          <Link className="button-outline" to="/prime-square">
            Explore the Project
          </Link>
        </div>
      </section>
      <section className="section section-light">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">OUR APPROACH</span>
            <h2 className="display-heading">Growth Built on Purpose</h2>
          </div>
          <div className="principle-grid">
            {[
              ["Long-term vision", "Keep a thoughtful perspective on what comes next."],
              [
                "Responsible growth",
                "Give attention to quality, transparency, and accountability.",
              ],
              [
                "People and opportunity",
                "Encourage professional growth and meaningful connections.",
              ],
              [
                "Trust and accountability",
                "Build relationships through care and clear communication.",
              ],
            ].map(([title, copy]) => (
              <article className="principle" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="site-container intro-grid">
          <h2 className="display-heading">Let’s Build Something Meaningful</h2>
          <div className="intro-copy">
            <p>
              We welcome relevant enquiries from businesses, organisations, service providers, and
              potential partners interested in exploring mutually suitable opportunities.
            </p>
            <Link className="text-link" to="/partnerships">
              Explore Partnerships <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <ContactPrompt />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT VAAYUSH" title="A Vision That Goes Beyond Business">
        <p>
          VAAYUSH GROUP OF COMPANIES is built around an entrepreneurial vision: to explore
          opportunities, develop meaningful business initiatives, create professional relationships,
          and pursue responsible growth.
        </p>
      </PageHero>
      <section className="content-section section-white">
        <div className="site-container capability-grid">
          <div>
            <img
              src={collaborationImage}
              alt="Indian professionals collaborating around plans in a contemporary office"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <p className="image-disclosure">Illustrative business image.</p>
          </div>
          <div>
            <span className="eyebrow">DRIVEN BY VISION</span>
            <h2 className="display-heading">United by Purpose. Committed to Progress.</h2>
            <p className="content-copy">
              We believe progress is strongest when people move forward together, respecting one
              another and working toward a shared purpose.
            </p>
          </div>
        </div>
      </section>
      <ContentSection title="Our Approach">
        <p>
          <strong>Think beyond today.</strong> Maintain a long-term perspective.
        </p>
        <p>
          <strong>Create meaningful value.</strong> Focus on genuine needs and useful outcomes.
        </p>
        <p>
          <strong>Grow responsibly.</strong> Give attention to quality, transparency, and
          compliance.
        </p>
        <p>
          <strong>Empower people.</strong> Encourage talent, teamwork, skills, and entrepreneurship.
        </p>
        <p>
          <strong>Build lasting relationships.</strong> Treat customers, employees, and partners as
          important stakeholders.
        </p>
      </ContentSection>
      <ContentSection title="Our Vision" tone="white">
        <p>
          To build a trusted, diversified, and future-ready business group that creates
          opportunities and delivers lasting value through responsible entrepreneurship, innovation,
          and quality-focused execution.
        </p>
      </ContentSection>
      <ContentSection title="Our Mission">
        <p>
          To translate ambitious ideas into practical and responsible business initiatives,
          encourage professional development, build strong relationships, and pursue sustainable
          growth while respecting applicable laws and responsibilities.
        </p>
      </ContentSection>
      <FounderFeature />
      <LeadershipSection />
      <TeamSection />
      <ContentSection title="Our Journey Is About More Than Business" id="founders-message">
        <p>
          Every meaningful achievement begins with a vision, but it becomes reality through
          dedication, discipline, and the collective efforts of people who believe in that vision.
        </p>
        <p>
          At VAAYUSH, we aspire to build responsible businesses, lasting relationships, and
          initiatives that create value beyond immediate commercial outcomes.
        </p>
        <p>
          We believe progress is strongest when people move forward together, respecting one another
          and working toward a shared purpose.
        </p>
        <p>
          With determination, integrity, and a commitment to continuous improvement, we look forward
          to building the next chapter of the VAAYUSH journey.
        </p>
        <FounderSignature />
      </ContentSection>
      <ContactPrompt />
    </>
  );
}

export function BusinessesPage() {
  return (
    <>
      <PageHero eyebrow="OUR BUSINESSES" title="Different Capabilities. One Unified Vision.">
        <p>
          Each VAAYUSH division has a distinct purpose. Together, they represent the group's wider
          ambition to explore opportunities, serve customers, and develop meaningful business
          relationships.
        </p>
      </PageHero>
      {divisions.map((d, i) => (
        <ContentSection key={d.name} title={d.name} tone={i === 1 ? "white" : "light"}>
          <span className="eyebrow">{d.category}</span>
          <p>
            {i === 0
              ? "VAAYUSH ENTERPRISES focuses on manpower services and job consultancy. Its intended role is to connect organisations with relevant talent and help individuals explore professional opportunities in line with their qualifications and experience."
              : i === 1
                ? "VAAYUSH DEVELOPER represents the group's focus on real estate management and development opportunities. Its development philosophy emphasises thoughtful planning, functional spaces, location considerations, and responsible execution."
                : "VAAYUSH BUILDER represents the group's construction focus. Its approved services, working approach, and verified portfolio will be presented as information is confirmed; no completed projects or unverified capabilities are implied."}
          </p>
          <Link className="text-link" to="/contact" search={{ category: d.enquiry }}>
            {i === 0
              ? "Enquire About Manpower Services"
              : i === 1
                ? "Enquire About Real Estate"
                : "Enquire About Construction"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </ContentSection>
      ))}
      <ContactPrompt />
    </>
  );
}

export function PrimeSquarePage() {
  return (
    <>
      <PageHero
        eyebrow="FLAGSHIP RESIDENTIAL CONCEPT · PROPOSED"
        title="More Than a Home. A Vision of Community Living."
      >
        <p>
          VAAYUSH PRIME SQUARE is envisioned as a residential development concept in the Palghar
          region of Maharashtra. The proposed vision brings together contemporary architecture,
          thoughtfully planned living spaces, and lifestyle-oriented amenities.
        </p>
        <img
          className="page-hero-image"
          src={primeSquareImage}
          alt="Illustrative concept visualization of a landscaped residential complex and central courtyard"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
        <p className="image-disclosure">
          Illustrative concept image only. This is not a photograph of a completed development.
        </p>
      </PageHero>
      <ContentSection title="A Distinctive Design Direction">
        <p>
          The proposed circular-building concept explores a recognisable architectural identity,
          with attention to building arrangement, central open spaces, landscaped areas, and
          movement through the development.
        </p>
      </ContentSection>
      <ContentSection title="Proposed Concept Features" tone="white">
        <ul>
          <li>Proposed 2 BHK residential layouts.</li>
          <li>Circular-building architectural concept.</li>
          <li>Central open space and landscaped areas.</li>
          <li>Proposed fitness centre.</li>
          <li>Proposed swimming pool.</li>
          <li>Potential retail and convenience shops.</li>
          <li>Potential future education and healthcare facilities.</li>
        </ul>
        <p>All features remain proposed or potential and are not completed or guaranteed.</p>
      </ContentSection>
      <ContentSection title="Designed Around Everyday Living">
        <p>
          We believe a home should offer more than physical space. It should support comfort,
          convenience, a sense of belonging, and opportunities for a better everyday lifestyle.
        </p>
      </ContentSection>
      <ContentSection title="Project Transparency" tone="white">
        <div className="callout">
          <strong>Proposed development concept.</strong> Project approvals, registration
          information, pricing, availability, facilities, possession dates, and timelines have not
          been confirmed for publication. Please contact the team for verified updates.
        </div>
      </ContentSection>
      <ContactPrompt title="Interested in VAAYUSH PRIME SQUARE?" category="VAAYUSH PRIME SQUARE">
        Contact our team for project information and relevant updates.
      </ContactPrompt>
    </>
  );
}

export function ConstructionPage() {
  return (
    <>
      <PageHero eyebrow="VAAYUSH BUILDER" title="Building with Purpose">
        <p>
          Explore the construction capabilities, working approach, and verified project information
          associated with VAAYUSH BUILDER.
        </p>
      </PageHero>
      <section className="content-section section-white">
        <div className="site-container capability-grid">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2 className="display-heading">A Considered Approach to Construction</h2>
            <div className="content-copy">
              <p>
                Planning, coordination, quality-conscious practices, and responsible execution are
                important principles in our approach.
              </p>
              <p>
                Verified project details and approved construction services will be shared as they
                are confirmed.
              </p>
              <Link className="text-link" to="/contact" search={{ category: "Construction" }}>
                Discuss a Construction Requirement <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={constructionImage}
              alt="Illustrative view of a construction team reviewing plans at a building site"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <p className="image-disclosure">
              Illustrative construction image; not represented as a VAAYUSH project.
            </p>
          </div>
        </div>
      </section>
      <ContentSection title="Project Portfolio">
        <p>
          Verified project photographs and details will be added when approved information is
          available. No completed project, client, certification, or performance claim is
          represented here.
        </p>
        <div className="callout">
          This page currently presents construction capabilities rather than an unverified project
          portfolio.
        </div>
      </ContentSection>
      <ContactPrompt title="Discuss a Construction Requirement" category="Construction">
        Contact our team to discuss a construction enquiry.
      </ContactPrompt>
    </>
  );
}

function ReadinessNotice({
  children,
  tone = "info",
}: {
  children: ReactNode;
  tone?: "info" | "error";
}) {
  return (
    <div className="form-status" role="status" aria-live="polite" data-tone={tone}>
      {children}
    </div>
  );
}

export function ContactPage() {
  const { category } = useSearch({ from: "/contact" });
  const initial = category ?? "General Enquiry";
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setMessage(
      "This enquiry form is not connected yet, so your message has not been sent. Please contact us by phone or email.",
    );
  }
  return (
    <>
      <PageHero eyebrow="CONTACT US" title="Let’s Build Something Meaningful">
        <p>
          Whether you are interested in business services, real estate, construction, professional
          opportunities, or collaboration, we welcome relevant enquiries.
        </p>
        <div className="contact-details">
          <span>Palghar, Maharashtra, India</span>
          <a href="tel:+918173834966">+91 8173834966</a>
          <a href="mailto:ayushmaurya123890@gmail.com">ayushmaurya123890@gmail.com</a>
        </div>
      </PageHero>
      <section className="content-section section-white">
        <div className="site-container form-layout">
          <h2 className="display-heading">Send an Enquiry</h2>
          <form onSubmit={submit} noValidate key={initial}>
            <div className="form-grid">
              <Field label="Full name" required>
                <input name="name" autoComplete="name" required />
              </Field>
              <Field label="Phone number" required>
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="\+?[0-9][0-9\s\-]{6,16}"
                  title="Enter a valid phone number, for example +91 98765 43210"
                  required
                />
              </Field>
              <Field label="Email address">
                <input name="email" type="email" autoComplete="email" />
              </Field>
              <Field label="Enquiry category" required>
                <select
                  name="category"
                  defaultValue={enquiryCategories.includes(initial) ? initial : "General Enquiry"}
                  required
                >
                  {enquiryCategories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </Field>
              <Field label="Subject">
                <input name="subject" />
              </Field>
              <Field label="Message" wide required>
                <textarea name="message" required />
              </Field>
              <div className="field-wide">
                <Button className="form-submit" type="submit">
                  Submit Enquiry
                </Button>
              </div>
              <div className="field-wide">
                <ReadinessNotice>
                  {message ||
                    "The enquiry form is being prepared for secure email delivery. Nothing is sent from this page yet."}
                </ReadinessNotice>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ContactPrompt title="Prefer to speak with our team?">
        Call or email VAAYUSH GROUP OF COMPANIES in Palghar, Maharashtra.
      </ContactPrompt>
    </>
  );
}

function Field({
  label,
  children,
  required = false,
  wide = false,
}: {
  label: string;
  children: ReactNode;
  required?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={`field${wide ? " field-wide" : ""}`}>
      <label>
        {label}
        {required ? " *" : ""}
        {children}
      </label>
    </div>
  );
}

export function CareersPage() {
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const validationError = validateResumeFile(resume);
    if (validationError) {
      setIsError(true);
      setMessage(validationError);
      return;
    }
    setIsError(false);
    setMessage(
      "The application form is not connected yet, so your details and resume have not been sent. Please email your application to ayushmaurya123890@gmail.com.",
    );
  }
  return (
    <>
      <PageHero eyebrow="CAREERS" title="Build Your Next Opportunity with VAAYUSH">
        <p>
          We welcome interest from individuals who want to explore relevant career opportunities
          with VAAYUSH GROUP OF COMPANIES. Submit your profile and resume so our team can review
          your qualifications and experience.
        </p>
      </PageHero>
      <section className="content-section section-white">
        <div className="site-container form-layout">
          <div>
            <h2 className="display-heading">Candidate Application</h2>
            <p className="content-copy">
              Share your details and resume for consideration. No application is sent until a secure
              submission service is connected.
            </p>
          </div>
          <form onSubmit={submit} noValidate>
            <div className="form-grid">
              <Field label="Full name" required>
                <input name="name" autoComplete="name" required />
              </Field>
              <Field label="Phone number" required>
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="\+?[0-9][0-9\s\-]{6,16}"
                  title="Enter a valid phone number, for example +91 98765 43210"
                  required
                />
              </Field>
              <Field label="Email address" required>
                <input name="email" type="email" autoComplete="email" required />
              </Field>
              <Field label="Position or department of interest" required>
                <input name="position" required />
              </Field>
              <Field label="Highest qualification" required>
                <input name="qualification" required />
              </Field>
              <Field label="Experience level" required>
                <select name="experience-level" required defaultValue="">
                  <option value="" disabled>
                    Select experience level
                  </option>
                  <option>Fresher</option>
                  <option>Experienced</option>
                </select>
              </Field>
              <Field label="Current city" required>
                <input name="city" autoComplete="address-level2" required />
              </Field>
              <Field label="Relevant experience">
                <textarea name="experience" />
              </Field>
              <Field label="Resume" wide required>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  required
                  onChange={(event) => {
                    setResume(event.currentTarget.files?.[0] ?? null);
                    setIsError(false);
                    setMessage("");
                  }}
                />
                <small>
                  PDF, DOC, or DOCX. Maximum file size: 5 MB.{" "}
                  {resume ? `Selected: ${resume.name}` : "No file selected."}
                </small>
              </Field>
              <Field label="Additional information" wide>
                <textarea name="additional" />
              </Field>
              <div className="field-wide consent-row">
                <input id="consent" name="consent" type="checkbox" required />
                <label htmlFor="consent">
                  I consent to VAAYUSH GROUP OF COMPANIES processing the information provided for
                  consideration of my application.
                </label>
              </div>
              <div className="field-wide">
                <Button className="form-submit" type="submit">
                  Submit Application
                </Button>
              </div>
              <div className="field-wide">
                <ReadinessNotice tone={isError ? "error" : "info"}>
                  {message ||
                    "Your details and resume are not uploaded or stored; the application service is not connected yet."}
                </ReadinessNotice>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ContentSection title="What Happens Next?" tone="light">
        <ol>
          <li>Submit your details and resume.</li>
          <li>The VAAYUSH team reviews your profile.</li>
          <li>
            If your qualifications and experience match a relevant opportunity, the team may contact
            you.
          </li>
        </ol>
        <p>Submitting an application does not guarantee an interview or employment.</p>
      </ContentSection>
      <ContactPrompt />
    </>
  );
}

export function PartnershipsPage() {
  return (
    <>
      <PageHero eyebrow="PARTNERSHIPS" title="Together, We Can Create Greater Opportunities">
        <p>
          We welcome relevant enquiries from potential business partners, suppliers, service
          providers, consultants, and organisations interested in exploring mutually suitable
          opportunities.
        </p>
      </PageHero>
      <ContentSection title="Partnership Principles">
        <ul>
          <li>Clear objectives and responsibilities.</li>
          <li>Professional communication.</li>
          <li>Mutual respect and accountability.</li>
          <li>Commercial feasibility.</li>
          <li>Appropriate legal and regulatory compliance.</li>
          <li>Long-term value creation.</li>
        </ul>
        <p>
          We do not promise investment returns, guaranteed contracts, or unverified existing
          partnerships.
        </p>
        <Link className="text-link" to="/contact" search={{ category: "Business Partnership" }}>
          Submit a Partnership Enquiry <span aria-hidden="true">→</span>
        </Link>
      </ContentSection>
      <ContactPrompt title="Explore a Partnership with VAAYUSH" category="Business Partnership">
        Tell us about your organisation and the opportunity you would like to discuss.
      </ContactPrompt>
    </>
  );
}

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    description: "How VAAYUSH GROUP OF COMPANIES handles information shared through this website.",
    intro:
      "This page is a draft outline and requires review and approval before publication as a final privacy policy.",
    sections: [
      [
        "Information you choose to share",
        "The website may invite visitors to provide contact and application details. The careers and enquiry forms are currently frontend demonstrations and are not connected to a submission service; information entered or selected is not sent or stored by this site.",
      ],
      [
        "How information may be used",
        "When an approved submission service is introduced, the final policy should explain why information is collected, how it is used, who may access it, and how long it is retained.",
      ],
      [
        "Contact and updates",
        "For questions about privacy, contact ayushmaurya123890@gmail.com. This draft must be updated to reflect the final approved information-handling practices.",
      ],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    description: "Draft terms for using the VAAYUSH GROUP OF COMPANIES website.",
    intro:
      "This is a general draft for review, not final legal advice. Approved terms and any applicable statutory information should be added before publication.",
    sections: [
      [
        "Website information",
        "Information is provided for general purposes and may be updated, corrected, or removed. Descriptions of businesses, services, proposed projects, or potential facilities should be independently confirmed before decisions are made.",
      ],
      [
        "Enquiries and applications",
        "Submitting an enquiry or expressing interest does not create a contract, guarantee a response, or promise an interview, employment, service, partnership, or investment outcome.",
      ],
      [
        "Applicable details",
        "The final terms should be reviewed and completed with approved company and legal information before publication.",
      ],
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description:
      "Important information about proposed projects and general website content from VAAYUSH GROUP OF COMPANIES.",
    intro:
      "The information on this website is provided for general informational purposes. Certain business divisions, services, projects, facilities, and expansion plans may be proposed or under development.",
    sections: [
      [
        "Project information",
        "All descriptions are subject to verification, applicable approvals, contractual terms, and relevant laws. Illustrative images may not represent actual completed developments. Proposed or potential features are not guaranteed.",
      ],
      [
        "No investment guarantee",
        "Nothing on this website constitutes a guarantee of investment returns. Visitors should seek verified project information and appropriate professional advice before making decisions.",
      ],
      [
        "Accuracy and updates",
        "Project approvals, registration numbers, prices, availability, distances, possession dates, and completion timelines are not published unless approved and verified.",
      ],
    ],
  },
};

export function LegalPage({ page }: { page: keyof typeof legalContent }) {
  const content = legalContent[page];
  return (
    <>
      <PageHero eyebrow="INFORMATION" title={content.title}>
        <p>{content.intro}</p>
      </PageHero>
      <section className="content-section section-white">
        <div className="site-container legal-copy">
          {content.sections.map(([heading, body]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </section>
      <ContactPrompt />
    </>
  );
}
