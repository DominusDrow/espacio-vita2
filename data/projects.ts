// /data/projects.ts
export interface Project {
  slug: string;       // identificador único en URL, p.ej. 'proyecto-a'
  title: string;
  description: string;
  images: string[];   // rutas relativas en `/public`
}

export const projects: Project[] = [
  {
    slug: 'proyecto-a',
    title: 'Proyecto A',
    description: 'Descripción breve del Proyecto A.',
    images: ['/images/a1.jpg', '/images/a2.jpg'],
  },
  {
    slug: 'proyecto-b',
    title: 'Proyecto B',
    description: 'Descripción breve del Proyecto B.',
    images: ['/images/b1.jpg', '/images/b2.jpg'],
  },
  {
    slug: 'proyecto-c',
    title: 'Proyecto C',
    description: 'Descripción breve del Proyecto C.',
    images: ['/images/c1.jpg', '/images/c2.jpg'],
  },
];
