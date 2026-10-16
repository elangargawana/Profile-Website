export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  technologies: string[];
  description: string;
  url?: string;
  featured: boolean;
  index: number;
}

export const projects: Project[] = [
  {
    id: 'arletta-prime',
    name: 'Arletta Prime Luxury',
    category: 'Fullstack Development',
    role: 'Freelance Fullstack Developer',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    description: 'Three business applications for a hospitality company.',
    featured: true,
    index: 0,
  },
  {
    id: 'kpr-jateng',
    name: 'KPR Jateng',
    category: 'Frontend Development',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    description: 'Frontend application for housing credit platform.',
    featured: true,
    index: 1,
  },
  {
    id: 'narativa-automation',
    name: 'Narativa X Automation',
    category: 'Fullstack Development',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'React', 'FastAPI', 'Python'],
    description: 'Automation platform with Next.js and FastAPI.',
    featured: true,
    index: 2,
  },
  {
    id: 'inamikro',
    name: 'INAmikro',
    category: 'Mobile & API Development',
    role: 'Mobile Developer',
    technologies: ['Laravel', 'Flutter', 'Dart', 'MySQL'],
    description: 'PPOB dashboard and mobile application for micro-businesses.',
    featured: true,
    index: 3,
  },
  {
    id: 'e-raport',
    name: 'E-Raport',
    category: 'Frontend Development',
    role: 'Frontend Developer',
    technologies: ['React', 'JavaScript', 'CSS'],
    description: 'Student report card interface for Kemdikbud system.',
    featured: false,
    index: 4,
  },
  {
    id: 'pcc-websites',
    name: 'PCC Websites',
    category: 'Web Development',
    role: 'Contributor',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Polytechnic Computer Club organizational websites.',
    featured: false,
    index: 5,
  },
];

export const capabilityGroups = [
  {
    key: 'frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    key: 'backend',
    items: ['PHP', 'Laravel', 'Node.js', 'FastAPI', 'REST APIs'],
  },
  {
    key: 'database',
    items: ['MySQL'],
  },
  {
    key: 'mobile',
    items: ['Flutter', 'Dart'],
  },
  {
    key: 'tools',
    items: ['Git', 'Docker', 'Postman'],
  },
];
