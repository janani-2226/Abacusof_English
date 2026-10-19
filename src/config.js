// ─────────────────────────────────────────────────────────────
//  Edit everything about the site from this one file.
//  Replace the placeholder text and the two Google Form links.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "Abacus of English",
  tagline: "Speak with clarity. Lead with confidence.",
  email: "hello@abaculofenglish.com",
  phone: "+91-8778593044",
  location: "Virudhunagar, Tamil Nadu",
};

// 👉 Paste your Google Form URLs here
export const forms = {
  bookCoach: "https://forms.gle/UnvTfPxVfSqqra146",
  bookCourse: "https://forms.gle/28rQ6hDEAtuDanZNA",
};

export const coach = {
  name: "Your Coach Name",
  title: "Spoken English & Communication Coach",
  photo: "/images/aboutus_profile_picture.jpg", // lives in /public/images
  intro:
    "I help students, professionals and job-seekers speak English fluently and confidently — for interviews, presentations, and everyday conversation.",
  bio: [
    "With over 10 years of experience training learners across India, I've coached thousands of people to overcome hesitation and express themselves clearly in English.",
    "My sessions focus on real-world speaking: pronunciation, grammar in context, public speaking, and interview readiness — never rote memorisation.",
  ],
  stats: [
    { value: "10+", label: "Years coaching" },
    { value: "5,000+", label: "Learners trained" },
    { value: "50+", label: "Workshops" },
  ],
  details: [
    { label: "Qualification", value: "M.A. English Literature" },
    { label: "Certification", value: "CELTA / TESOL Certified" },
    { label: "Languages", value: "English, Tamil, Hindi" },
    { label: "Mode", value: "Online & In-person" },
  ],
  highlights: [
    "Spoken English for beginners to advanced",
    "Interview & HR round preparation",
    "Public speaking and presentation skills",
    "Accent neutralisation & pronunciation",
  ],
};

export const offers = [
  {
    key: "bookCoach",
    eyebrow: "01",
    title: "Book the Coach",
    text: "One-on-one sessions tailored to your goals — interviews, presentations, or everyday fluency.",
    cta: "Book a Session",
  },
  {
    key: "bookCourse",
    eyebrow: "02",
    title: "Buy a Course",
    text: "Structured batch programmes in spoken English, grammar and public speaking.",
    cta: "Buy a Course",
  },
];
