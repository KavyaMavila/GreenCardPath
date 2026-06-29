import { image } from "framer-motion/client";

export const site = {
  name: "GreenCard Path",
  description:
    "EB-1A & NIW self-petition strategy, evidence building, and petition narrative — without an employer sponsor.",
};

export const navItems = [
  { label: "EB-1A & NIW", href: "#compare" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export const stats = [
  { value: "30+", label: "Petitions filed" },
  { value: "96%", label: "Approval rate" },
  { value: "0", label: "Employer needed" },
] as const;

export const comparison = {
  title: "Two Paths, One Goal",
  subtitle: "What Are EB-1A & NIW?",
  description:
    "Both are self-petition green cards — meaning you don't need an employer to sponsor you. Here's how they compare.",
  cards: [
    {
      key: "eb1a",
      image:"/images/EB-1A image.webp",
      name: "EB-1A",
      tagline: "Extraordinary Ability",
      summary:
        "For individuals who have risen to the top of their field through sustained national or international acclaim.",
      bestForTitle: "Best for",
      bestFor:
        "Researchers, engineers, founders, and artists with major achievements.",
        icons: [
          "/images/researchers-icon.svg",
          "/images/engg-icon.svg",
          "/images/founder-icon.svg",
          "/images/artist-icon.svg",
        ],
      signalsTitle: "Qualification signals",
      signals: [
        "Published research or original contributions",
        "Awards or prizes for excellence",
        "High salary or remuneration",
        "Patents, citations, or media coverage",
      ],
      timelineLabel: "Typical timeline",
      timeline: "4–8 months",
      timelineNote: "(15 days with Premium Processing)",
    },
    {
      key: "niw",
      image:"/images/NIW image.webp",
      name: "NIW",
      tagline: "National Interest Waiver",
      summary:
        "For professionals with substantial merit and broad U.S. impact — waiving the job offer requirement.",
      bestForTitle: "Best for",
      bestFor:
        "STEM professionals, healthcare workers, educators, and entrepreneurs.",
        icons: [
          "/images/stem-icon.svg",
          "/images/health-icon.svg",
          "/images/edu-icon.svg",
          "/images/entrpre-icon.svg",
        ],
      signalsTitle: "Qualification signals",
      signals: [
        "Advanced degree (Master's or higher) or exceptional ability",
        "Work in an area of substantial merit",
        "Well-positioned to advance the proposed endeavor",
        "On balance, beneficial to waive the job offer requirement",
      ],
      timelineLabel: "Typical timeline",
      timeline: "6–12 months",
      timelineNote: "(15 days with Premium Processing)",
    },
  ],
} as const;

export const eligibilityCriteria = [
  "Leadership in a distinguished organization",
  "High salary relative to your field",
  "Original contributions of major significance",
   "Awards, prizes, or honors in your field",
  "Published research papers or journal articles",
  "Membership in selective professional associations",
  "Served as a peer reviewer or judge",
  "Press or media coverage of your work"
 
  
  
  
  
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Free Discovery Call",
    duration: "30 mins",
    body: "We review your background, goals, and visa situation. You'll know within 30 minutes whether you have a case — and which path to pursue.",
  },
  {
    step: "02",
    title: "Profile Audit & Strategy",
    duration: "Week 01",
    body: "Deep-dive into your CV, publications, patents, and achievements. We map every strength to USCIS criteria and identify any gaps.",
  },
  {
    step: "03",
    title: "Evidence Building",
    duration: "Months 01–03",
    body: "If you're close but not quite there, we help you strategically fill gaps — new publications, press coverage, recommendation letters, and more.",
  },
  {
    step: "04",
    title: "Petition Drafting",
    duration: "Months 02–04",
    body: "We write the compelling narrative, organize every exhibit, draft recommendation letters, and assemble the airtight petition package.",
  },
  {
    step: "05",
    title: "Filing & Approval",
    duration: "Months 04–06+",
    body: "Submit to USCIS. We handle any RFE (Request for Evidence) responses. Premium processing available for 15-day adjudication.",
  },
] as const;

export const pricing = {
  title: "Services",
  subtitle: "Choose Your Level of Support",
  description:
    "Every engagement starts with a free call. No pressure, no commitment.",
  tiers: [
    {
      key: "evaluation",
      name: "Case Evaluation",
      price: "Free",
      priceNote: "30-minute call",
      cta: "Book Free Call",
      href: "#contact",
      highlight: false,
      features: [
        "Honest eligibility assessment",
        "EB-1A vs NIW recommendation",
        "Roadmap overview",
        "No commitment",
      ],
    },
    {
      key: "filing",
      name: "Full Filing Support",
      price: "Custom",
      priceNote: "Based on case complexity",
      cta: "Get Started",
      href: "#contact",
      highlight: true,
      features: [
        "Everything in Evaluation",
        "Complete petition drafting",
        "Evidence organization & exhibits",
        "Recommendation letter guidance",
        "RFE response support",
        "Priority communication",
      ],
    },
    {
      key: "premium",
      name: "Premium Support",
      price: "Custom",
      priceNote: "Premium, hands-on support",
      cta: "Learn More",
      href: "#contact",
      highlight: false,
      features: [
        "Everything in Full Filing",
        "Strategic evidence gap-filling",
        "Publication & press strategy",
        "Recommendation letter drafting",
        "Dedicated advisor",
        "Expedited timeline",
      ],
    },
  ],
} as const;

export const testimonials = [
  {
    badge: "EB-1A Approved",
    quote:
      "I had 6 publications but didn't think it was enough. They showed me my open-source contributions and citation count were strong evidence too. Approved with no RFE in 4 months.",
    name: "Amit K.",
    role: "ML Engineer",
    initials: "AK",
  },
  {
    badge: "NIW Approved",
    quote:
      "As a postdoc, I assumed I needed a company to sponsor me. The NIW path let me self-petition. The petition narrative they wrote was incredible — it connected my research to national health priorities perfectly.",
    name: "Sneha P.",
    role: "Biotech Researcher",
    initials: "SP",
  },
  {
    badge: "EB-1A Approved",
    quote:
      "They helped me get two recommendation letters from people I'd never even met — top researchers who knew my published work. That was the difference maker. Premium processing, 12 days to approval.",
    name: "Ravi M.",
    role: "Data Scientist",
    initials: "RM",
  },
] as const;

export const faq = [
  {
    q: "Do I need a lawyer for EB-1A or NIW?",
    a: "While you can file pro se (on your own), most successful petitions involve professional guidance. We work alongside immigration attorneys when needed and can recommend trusted legal partners. Our role is strategy, evidence building, and petition narrative — the parts that determine approval.",
  },
  {
    q: "What's the difference between EB-1A and NIW?",
    a: "EB-1A is for individuals at the top of their field with sustained acclaim. NIW can fit professionals whose work has substantial merit and national importance and who are well positioned to advance that work. We'll recommend the strongest path based on your profile and evidence.",
  },
  {
    q: "Can I apply while on H-1B, F-1, or O-1?",
    a: "Many people pursue self-petitions while maintaining valid nonimmigrant status, but timing and travel/work authorization considerations vary by individual circumstances. We'll review your status and goals in the discovery call and coordinate with legal counsel if needed.",
  },
  {
    q: "How many of the 10 EB-1A criteria do I need?",
    a: "USCIS generally expects evidence under at least three of the ten regulatory criteria, plus proof that you are among the small percentage at the top of your field. We'll map your evidence to the criteria and identify gaps before filing.",
  },
  {
    q: "How long does the whole process take?",
    a: "Typical ranges vary by path, evidence readiness, and USCIS processing times. Premium Processing can shorten certain petition adjudications. Your roadmap will include a realistic timeline based on what's already in place vs. what we still need to build.",
  },
  {
    q: "What if I get a Request for Evidence (RFE)?",
    a: "RFEs are not uncommon. We prepare a strong initial package, and if USCIS requests clarification, we help you respond with targeted evidence and a clear narrative. Full Filing and Premium Support include RFE strategy support.",
  },
  {
    q: "I don't have publications. Can I still qualify?",
    a: "Publications are common but not strictly required for every case. Depending on your field, other forms of evidence — patents, awards, critical roles, commercial impact, or comparable proof — may support your petition. We'll assess what you have and what to build next.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Free Discovery Call",
    badge: "30 Mins",
    description:
      "We review your background, goals, and visa situation. You'll know within 30 minutes whether you have a case — and which path to pursue.",
  },
  {
    number: "02",
    title: "Profile Audit & Strategy",
    badge: "Week 01",
    description:
      "Deep-dive into your CV, publications, patents, and achievements. We map every strength to USCIS criteria and identify any gaps.",
  },
  {
    number: "03",
    title: "Evidence Building",
    badge: "Months 01 - 03",
    description:
      "If you're close but not quite there, we help you strategically fill gaps — new publications, press coverage, recommendation letters, and more.",
  },
  {
    number: "04",
    title: "Petition Drafting",
    badge: "Months 02 - 04",
    description:
      "We write the compelling narrative, organize every exhibit, draft recommendation letters, and assemble the airtight petition package.",
  },
  {
    number: "05",
    title: "Filing & Approval",
    badge: "Months 04 - 06+",
    description:
      "Submit to USCIS. We handle any RFE (Request for Evidence) responses. Premium processing available for 15-day adjudication.",
  },
] as const ; 


export const INTEREST_OPTIONS = [
  "EB-1A (Extraordinary Ability)",
  "NIW (National Interest Waiver)",
  "Not sure — help me figure out which",
  "Just want a profile evaluation",
] as const;

export const IMMIGRATION_OPTIONS = [
  "Working in the US (H-1B, O-1, L-1, etc)",
  "On F-1 / OPT / STEM OPT",
  "Outside the US, looking to move",
  "Other situation",
] as const;

export const ACHIEVEMENTS = [
  "Published research papers or articles",
  "Patents (filed or granted)",
  "Awards or honors in my field",
  "Press or media coverage of my work",
  "Peer reviewer or judge",
  "High salary relative to my field",
  "Leadership in a distinguished org",
  "Significant citations of my work",
  "Original contributions of major significance",
  "Membership in selective associations",
] as const;

export const FIELDS = [
  "Software / AI / Data Science",
  "Research / Academia",
  "Engineering",
  "Business / Entrepreneurship",
  "Healthcare / Biotech",
  "Other",
] as const;

