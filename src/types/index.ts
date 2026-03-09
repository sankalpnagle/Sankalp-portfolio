export interface NavItem {
  id: string;
  label: string;
}

export interface SkillData {
  name: string;
  pct: number;
}

export interface Experience {
  role: string;
  co: string;
  loc: string;
  period: string;
  pts: string[];
}

export interface Project {
  n: string;
  name: string;
  emoji: string;
  desc: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  images: string[];
}

export interface ContactInfo {
  ico: string;
  l: string;
  v: string;
  h: string | null;
}

export interface StatBox {
  n: string;
  l: string;
  ico: string;
}
