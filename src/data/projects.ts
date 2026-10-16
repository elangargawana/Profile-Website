export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  technologies: string[];
  description: string;
  image?: string;
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
    image: '/projects/arletta-main.png',
    url: 'https://arlettaluxury.com/',
    featured: true,
    index: 0,
  },
  {
    id: 'arletta-gym',
    name: 'Arletta Gym',
    category: 'Fullstack Development',
    role: 'Freelance Fullstack Developer',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    description: 'Gym management application for Arletta Prime Luxury.',
    image: '/projects/arletta-gym.png',
    url: 'https://gym.arlettaluxury.com/',
    featured: true,
    index: 1,
  },
  {
    id: 'arletta-kost',
    name: 'Arletta Kost',
    category: 'Fullstack Development',
    role: 'Freelance Fullstack Developer',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    description: 'Boarding-house management application for Arletta Prime Luxury.',
    image: '/projects/arletta-kost.png',
    url: 'https://kost.arlettaluxury.com/',
    featured: false,
    index: 2,
  },
  {
    id: 'arletta-cafe',
    name: 'Arletta Cafe',
    category: 'Fullstack Development',
    role: 'Freelance Fullstack Developer',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    description: 'Cafe operations application for Arletta Prime Luxury.',
    image: '/projects/arletta-cafe.png',
    url: 'https://cafe.arlettaluxury.com/',
    featured: false,
    index: 3,
  },
  {
    id: 'aksara-media',
    name: 'Aksara Media Promosi',
    category: 'Web Development',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Digital advertising and media agency website.',
    image: '/projects/aksara-media.png',
    url: 'https://aksaramediapromosi.com/',
    featured: true,
    index: 4,
  },
  {
    id: 'desa-wisata',
    name: 'Desa Wisata Pandansari',
    category: 'Web Development',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Eco-tourism village portal for Desa Pandansari.',
    image: '/projects/desa-wisata.png',
    url: 'https://desawisatapandansari.com/',
    featured: true,
    index: 5,
  },
  {
    id: 'kpr-jateng',
    name: 'Oemah Lestari',
    category: 'Frontend Development',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    description: 'Marketplace and housing credit (KPR) platform for residential properties and land in Central Java.',
    image: '/projects/kpr-jateng.png',
    url: 'https://www.oemahlestari.com/home',
    featured: true,
    index: 6,
  },
  {
    id: 'inamikro',
    name: 'INAmikro',
    category: 'Mobile & API Development',
    role: 'Mobile Developer',
    technologies: ['Laravel', 'Flutter', 'Dart', 'MySQL'],
    description: 'PPOB dashboard and mobile application for micro-businesses.',
    image: undefined,
    url: undefined,
    featured: false,
    index: 7,
  },
];

export const capabilityGroups = [
  {
    key: 'frontend',
    items: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vue.js', icon: 'vue' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
  {
    key: 'database',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    key: 'mobile',
    items: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Dart', icon: 'dart' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
];

export const specialtyItems = [
  {
    key: 'web-frontend',
    icon: '⬚',
    titleKey: 'web_frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    key: 'fullstack',
    icon: '⬡',
    titleKey: 'fullstack',
    technologies: ['Laravel', 'Node.js', 'FastAPI', 'REST APIs'],
  },
  {
    key: 'mobile',
    icon: '◻',
    titleKey: 'mobile',
    technologies: ['Flutter', 'Dart'],
  },
  {
    key: 'api',
    icon: '◈',
    titleKey: 'api_integration',
    technologies: ['REST APIs', 'FastAPI', 'Laravel'],
  },
];
