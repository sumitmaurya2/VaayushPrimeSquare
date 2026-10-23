import { byTier, type TeamMember } from "@/data/team";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

function Portrait({
  member,
  size,
  eager = false,
}: {
  member: TeamMember;
  size: "feature" | "card" | "inline";
  eager?: boolean;
}) {
  const dimension = size === "feature" ? 480 : size === "card" ? 320 : 96;
  return member.photo ? (
    <img
      className={`portrait portrait-${size}`}
      src={member.photo}
      alt={member.photoAlt ?? `Portrait of ${member.name}`}
      width={dimension}
      height={dimension}
      loading={eager ? undefined : "lazy"}
      decoding="async"
    />
  ) : (
    <div className={`portrait portrait-${size} portrait-placeholder`} aria-hidden="true">
      <span>{initials(member.name)}</span>
    </div>
  );
}

export function FounderFeature() {
  const [founder] = byTier("founder");
  if (!founder) return null;
  return (
    <section className="content-section section-white" aria-labelledby="founder-heading">
      <div className="site-container founder-grid">
        <Portrait member={founder} size="feature" />
        <div>
          <span className="eyebrow">{founder.role}</span>
          <h2 className="display-heading" id="founder-heading">
            {founder.name}
          </h2>
          {founder.bio && <p className="founder-bio">{founder.bio}</p>}
          {founder.highlights && (
            <ul className="highlight-tags" aria-label={`About ${founder.name}`}>
              {founder.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <a className="text-link" href="#founders-message">
            Read the Founder&rsquo;s message <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PersonCard({ member }: { member: TeamMember }) {
  return (
    <article className="person-card">
      <Portrait member={member} size="card" />
      <h3>{member.name}</h3>
      <p className="person-role">{member.role}</p>
      {member.bio && <p className="person-bio">{member.bio}</p>}
    </article>
  );
}

export function LeadershipSection() {
  const leaders = byTier("leadership");
  const pending = leaders.filter((member) => !member.photo);
  if (leaders.length === 0) return null;
  return (
    <section className="content-section section-light" aria-labelledby="leadership-heading">
      <div className="site-container">
        <div className="section-heading">
          <span className="eyebrow">LEADERSHIP</span>
          <h2 className="display-heading" id="leadership-heading">
            The People Guiding the Vision
          </h2>
        </div>
        <div className="person-grid">
          {leaders.map((member) => (
            <PersonCard key={member.slug} member={member} />
          ))}
        </div>
        {pending.length > 0 && (
          <p className="image-disclosure">
            Portraits and biographies will be added when approved materials are available.
          </p>
        )}
      </div>
    </section>
  );
}

export function TeamSection() {
  const members = byTier("team");
  if (members.length === 0) return null;
  return (
    <section className="content-section section-white" aria-labelledby="team-heading">
      <div className="site-container">
        <div className="section-heading">
          <span className="eyebrow">OUR TEAM</span>
          <h2 className="display-heading" id="team-heading">
            Meet the Team
          </h2>
        </div>
        <div className="person-grid person-grid-team">
          {members.map((member) => (
            <PersonCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderSignature() {
  const [founder] = byTier("founder");
  if (!founder) return null;
  return (
    <div className="signature">
      <Portrait member={founder} size="inline" />
      <p>
        <strong>{founder.name}</strong>
        <br />
        {founder.role}
      </p>
    </div>
  );
}
