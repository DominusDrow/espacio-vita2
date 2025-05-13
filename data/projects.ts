// /data/projects.ts
export interface Project {
  slug: string;            // identificador único en URL, p.ej. 'proyecto-a'
  title: string;
  description: string;
  images: string[];        // rutas relativas en `/public`
  location: string;        // Ubicación del proyecto
  dateCompleted: string;   // Fecha de finalización (formato ISO o legible)
  projectType: string;     // Tipo de proyecto (e.g. 'Residential', 'Commercial')
  collaborators: string[]; // Lista de nombres de colaboradores
}

export const projects: Project[] = [
  {
    slug: 'proyecto-a',
    title: 'Proyecto A',
    description: 'Descripción breve del Proyecto A.',
    images: ['/espacio-vita1.jpg', '/espacio-vita2.jpg', '/espacio-vita3.jpg', '/espacio-vita4.jpg', '/espacio-vita5.jpg', '/espacio-vita6.jpg'],
    location: 'Ciudad de México, México',
    dateCompleted: '2024-11-30',
    projectType: 'Residential',
    collaborators: ['Arq. Juan Pérez', 'Ing. Ana Gómez'],
  },
  {
    slug: 'proyecto-b',
    title: 'Proyecto B',
    description: 'Descripción breve del Proyecto B.',
    images: ['/espacio-vita1.jpg', '/espacio-vita2.jpg', '/espacio-vita3.jpg', '/espacio-vita4.jpg', '/espacio-vita5.jpg', '/espacio-vita6.jpg'],
    location: 'Guadalajara, México',
    dateCompleted: '2025-02-15',
    projectType: 'Commercial',
    collaborators: ['Arq. María López', 'Designer Studio XYZ'],
  },
  {
    slug: 'proyecto-c',
    title: 'Proyecto C',
    description: 'Descripción breve del Proyecto C.',
    images: ['/espacio-vita1.jpg', '/espacio-vita2.jpg', '/espacio-vita3.jpg', '/espacio-vita4.jpg', '/espacio-vita5.jpg', '/espacio-vita6.jpg'],
    location: 'Monterrey, México',
    dateCompleted: '2025-04-01',
    projectType: 'Interior Design',
    collaborators: ['Interiorist Co.', 'Lighting Experts Ltd.'],
  },
];
