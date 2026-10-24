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
    technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
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
    technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
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
    technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
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
    technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
    description: 'Cafe operations application for Arletta Prime Luxury.',
    image: '/projects/arletta-cafe.png',
    url: 'https://cafe.arlettaluxury.com/',
    featured: false,
    index: 3,
  },
  {
    id: 'aksara-media',
    name: 'Aksara Media Promosi',
    category: 'Fullstack Development',
    role: 'Fullstack Developer',
    technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
    description: 'Digital advertising agency website and dashboard.',
    image: '/projects/aksara-media.png',
    url: 'https://aksaramediapromosi.com/',
    featured: true,
    index: 4,
  },
  {
    id: 'desa-wisata',
    name: 'Desa Wisata Pandansari',
    category: 'Fullstack Development',
    role: 'Fullstack Developer',
    technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
    description: 'Eco-tourism village portal and management dashboard.',
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
    id: 'sightway',
    name: 'Sightway',
    category: 'Mobile & IoT Development',
    role: 'Frontend & IoT Developer',
    technologies: ['Flutter', 'FastAPI', 'Python', 'IoT', 'Dart'],
    description: 'Assistive IoT and AI monitoring & emergency alert system for the visually impaired.',
    image: '/projects/sightway.png',
    url: 'https://etd.polines.ac.id/index.php?p=show_detail&id=15095&keywords=',
    featured: true,
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
      { name: 'Vue.js', icon: 'vue' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Inertia.js', icon: 'inertia' },
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
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
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
