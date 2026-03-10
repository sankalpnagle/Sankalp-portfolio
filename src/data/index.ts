import type {
  NavItem,
  SkillData,
  Experience,
  Project,
  ContactInfo,
  StatBox,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "work", label: "My Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const SKILLS_DATA: SkillData[] = [
  { name: "React.js / Next.js", pct: 90 },
  { name: "JavaScript / TypeScript", pct: 92 },
  { name: "Node.js / Express.js", pct: 88 },
  { name: "MongoDB / MySQL", pct: 82 },
  { name: "AWS (Amplify · EC2 · S3)", pct: 75 },
  { name: "CI/CD · GitHub Actions", pct: 78 },
  { name: "Prisma ORM", pct: 80 },
  { name: "REST APIs / JWT / OAuth", pct: 87 },
];

export const TECH: string[] = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "MySQL",
  "Prisma",
  "AWS",
  "Firebase",
  "Redux Toolkit",
  "Tailwind CSS",
  "GitHub Actions",
  "JWT",
  "OAuth",
  "REST APIs",
  "Cursor AI",
];

export const EXP: Experience[] = [
  {
    role: "Associate Software Engineer",
    co: "Gigatorb Software Pvt Ltd",
    loc: "Indore, IN",
    period: "Jan 2024 – June 2025",
    pts: [
      "Developed modern full-stack apps with Next.js, React.js, Node.js & MongoDB",
      "Designed scalable RESTful APIs using Prisma ORM (SQL + NoSQL)",
      "Deployed & managed AWS (Amplify, EC2, S3) — high availability & scalability",
      "Created CI/CD pipelines via GitHub Actions, reducing deployment effort by 60%",
      "Integrated AWS SNS & SES for automated SMS/email notification workflows",
      "Implemented Cron Jobs for scheduling, renewals & user notifications",
    ],
  },
  {
    role: "Software Engineer",
    co: "MazeX Media",
    loc: "Bhopal, IN",
    period: "Jan 2023 – Dec 2023",
    pts: [
      "Developed responsive web pages with seamless cross-device UX",
      "Integrated APIs and enhanced features using Redux & Redux Toolkit",
      "Built React applications with reusable components & clean state management",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    n: "01",
    name: "Shopsy",
    emoji: "🛒",
    desc: "A modern e-commerce platform that allows users to discover, shop, and purchase products seamlessly with fast checkout, secure payments, and a smooth shopping experience.",
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js,", "AWS"],
    githubUrl: "https://github.com/sankalpnagle/ecommerce-shopping-app",
    liveUrl: "https://ecommerce-shopping-app-voc9.vercel.app/",
    images: [
      "/projects/shop-1.png",
      "/projects/shop-2.png",
      "/projects/shop-3.png",
    ],
  },
  {
    n: "02",
    name: "Nexus",
    emoji: "💬",
    desc: "Nexus is a modern communication platform designed to enable seamless conversations across languages. The application provides real-time messaging, multilingual translation, and media sharing in a clean and intuitive interface. Built with modern web technologies, Nexus focuses on speed, usability, and global communication.",
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express.js,",
      "Vercel",
    ],
    githubUrl: "https://github.com/sankalpnagle/Nexus",
    liveUrl: "https://nexus-six-rosy.vercel.app/",
    images: [
      "/projects/nexus-1.png",
      "/projects/nexus-2.png",
      "/projects/nexus-3.png",
    ],
  },
  {
    n: "03",
    name: "Port Cost",
    emoji: "⚓",
    desc: "Marine industry application helping shipping companies calculate port expenses, customize service costs and streamline billing workflows.",
    tags: ["React", "Spring Boot", "MySQL", "AWS"],
    githubUrl: "Industrial project - code not public",
    liveUrl: "https://www.portcosts.com/home",
    images: [
      "/projects/port-1.png",
      "/projects/port-2.png",
      "/projects/port-3.png",
    ],
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    ico: "✉",
    l: "Email",
    v: "sankalp.nagle07@gmail.com",
    h: "mailto:sankalp.nagle07@gmail.com",
  },
  { ico: "☏", l: "Phone", v: "+91 9302959198", h: "tel:+919302959198" },
  { ico: "⌖", l: "Location", v: "Pune, Maharashtra, India", h: null },
];

export const STAT_BOXES: StatBox[] = [
  { n: "2.6+", l: "Years of\nExperience", ico: "⚡" },
  { n: "3+", l: "Projects\nCompleted", ico: "🚀" },
  { n: "60%", l: "Deployment\nTime Saved", ico: "⚙️" },
  { n: "5+", l: "AWS Services\nMastered", ico: "☁️" },
];

export const HERO_STATS: Array<[string, string]> = [
  ["2.6+", "Yrs Experience"],
  ["5+", "Projects Shipped"],
  ["60%", "Deployment Saved"],
];

export const INFO_GRID: Array<[string, string]> = [
  ["Name", "Sankalp Nagle"],
  ["Experience", "2.6+ Years"],
  ["Location", "Pune, MH, IN"],
  ["Degree", "B.E. Computer Science"],
  ["Email", "sankalp.nagle07@gmail.com"],
  ["Phone", "+91 9302959198"],
];
