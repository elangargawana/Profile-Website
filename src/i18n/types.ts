export type Language = 'en' | 'id' | 'jp';

export interface NavTranslations {
  work: string;
  about: string;
  experience: string;
  contact: string;
}

export interface HeroTranslations {
  greeting: string;
  role: string;
  tagline: string;
  description: string;
  cta_work: string;
  cta_contact: string;
  location: string;
  available: string;
}

export interface WorkTranslations {
  heading: string;
  subheading: string;
  role_label: string;
  tech_label: string;
  view_project: string;
  projects: ProjectTranslation[];
}

export interface ProjectTranslation {
  name: string;
  category: string;
  role: string;
  description: string;
}

export interface CapabilitiesTranslations {
  heading: string;
  subheading: string;
  groups: {
    frontend: string;
    backend: string;
    database: string;
    mobile: string;
    tools: string;
  };
}

export interface AboutTranslations {
  heading: string;
  paragraphs: string[];
}

export interface ExperienceTranslations {
  heading: string;
  subheading: string;
  items: ExperienceItemTranslation[];
}

export interface ExperienceItemTranslation {
  company: string;
  role: string;
  location: string;
  period: string;
  descriptions: string[];
}

export interface EducationTranslations {
  heading: string;
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  support: string;
}

export interface OrganizationTranslations {
  heading: string;
  org_name: string;
  role: string;
  period: string;
  contributions: string[];
}

export interface CertificationsTranslations {
  heading: string;
  items: CertificationItemTranslation[];
}

export interface CertificationItemTranslation {
  name: string;
  year: string;
}

export interface ContactTranslations {
  heading: string;
  description: string;
  email_label: string;
  phone_label: string;
  location_label: string;
  cta: string;
}

export interface FooterTranslations {
  tagline: string;
  rights: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  work: WorkTranslations;
  capabilities: CapabilitiesTranslations;
  about: AboutTranslations;
  experience: ExperienceTranslations;
  education: EducationTranslations;
  organization: OrganizationTranslations;
  certifications: CertificationsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}
