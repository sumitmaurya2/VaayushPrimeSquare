import ayushPhoto from "@/assets/team/ayush-singh-maurya.webp";
import ajayPhoto from "@/assets/team/ajay-kushwaha.webp";
import akshviPhoto from "@/assets/team/akshvi-singh-maurya.webp";
import ashutoshPhoto from "@/assets/team/ashutosh-malviya.webp";

/**
 * Single source of truth for the people shown on the website.
 *
 * To add someone: add one entry below (and drop their photo in src/assets/team/ if you
 * have one). `tier` decides which section they appear in on the About page:
 *   - "founder"    -> large feature block (use for one person)
 *   - "leadership" -> portrait cards under the founder
 *   - "team"       -> "Our Team" grid
 * People are shown in the order they appear in this list.
 */
export type TeamTier = "founder" | "leadership" | "team";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  tier: TeamTier;
  /** Approved biography. Leave out until one is provided; nothing is invented. */
  bio?: string;
  /** Short facts shown as tags under the bio. */
  highlights?: string[];
  photo?: string;
  /** Describes the photo for screen readers. */
  photoAlt?: string;
}

export const team: TeamMember[] = [
  {
    slug: "ayush-singh-maurya",
    name: "Ayush Singh Maurya",
    role: "Founder & CEO",
    tier: "founder",
    bio: "Ayush Singh Maurya is a young entrepreneur, social worker, and former student leader of Gorakhpur University. He is the Founder & CEO of VAAYUSH GROUP OF COMPANIES PVT. LTD., committed to business growth, employment generation, youth empowerment, and social development.",
    highlights: [
      "Young entrepreneur",
      "Social worker",
      "Former student leader, Gorakhpur University",
    ],
    photo: ayushPhoto,
    photoAlt: "Portrait of Ayush Singh Maurya, Founder and CEO of VAAYUSH GROUP OF COMPANIES",
  },
  {
    slug: "ajay-kushwaha",
    name: "Ajay Kushwaha",
    role: "President",
    tier: "leadership",
    photo: ajayPhoto,
    photoAlt: "Portrait of Ajay Kushwaha, President of VAAYUSH GROUP OF COMPANIES",
  },
  {
    slug: "akshvi-singh-maurya",
    name: "Akshvi Singh Maurya",
    role: "Vice President",
    tier: "leadership",
    photo: akshviPhoto,
    photoAlt: "Portrait of Akshvi Singh Maurya, Vice President of VAAYUSH GROUP OF COMPANIES",
  },
  {
    slug: "rehan-sheikh",
    name: "Rehan Sheikh",
    role: "Company General Secretary",
    tier: "leadership",
  },
  {
    slug: "ashutosh-malviya",
    name: "Ashutosh Malviya",
    role: "Social Media & Marketing Head",
    tier: "team",
    photo: ashutoshPhoto,
    photoAlt:
      "Portrait of Ashutosh Malviya, Social Media and Marketing Head at VAAYUSH GROUP OF COMPANIES",
  },
];

export const byTier = (tier: TeamTier) => team.filter((member) => member.tier === tier);
