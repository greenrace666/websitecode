import { Github, Linkedin, Twitter, BookOpen } from 'lucide-react';
import { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    icon: Github,
    username: '@nikilkrishna',
    link: 'https://github.com/nikilkrishna'
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    username: 'Nikil Krishna',
    link: 'https://linkedin.com/in/nikilkrishna'
  },
  {
    platform: 'Twitter',
    icon: Twitter,
    username: '@nikilkrishna_bio',
    link: 'https://twitter.com/nikilkrishna_bio'
  },
  {
    platform: 'Research Gate',
    icon: BookOpen,
    username: 'Nikil Krishna',
    link: 'https://researchgate.net/profile/nikilkrishna'
  }
];