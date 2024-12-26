import { LucideIcon } from 'lucide-react';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface SocialLink {
  platform: string;
  icon: LucideIcon;
  username: string;
  link: string;
}

export interface NavItem {
  name: string;
  href: string;
}