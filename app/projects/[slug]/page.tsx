import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, Project } from '../../../data/projects';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
});

interface Params { params: { slug: string } }

export function generateStaticParams(): { slug: string }[] {
  return projects.map((proj) => ({ slug: proj.slug }));
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project: Project | undefined = projects.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    // Contenedor único, relativo y de altura automática
    <div className="relative w-full">
      {/* Imagen de fondo que ocupa todo el contenedor */}
      <Image
        src={project.images[0]}
        alt={project.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay de contraste fijo sobre la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />

      {/* Header y título */}
      <header className="absolute top-0 left-0 w-full p-8 z-20 flex items-center bg-transparent">
        <Link
          href="/"
          className="group block overflow-hidden"
          style={{ height: '2.25rem' }}
        >
          <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[2.35rem]">
            <span
              className={`text-3xl text-white leading-[2.25rem] ${poppins.className}`}
              style={{ fontWeight: 700 }}
            >
              Espacio Vita
            </span>
            <span
              className={`text-3xl text-white leading-[2.25rem] ${poppins.className}`}
              style={{ fontWeight: 700 }}
            >
              Espacio Vita
            </span>
          </div>
        </Link>
      </header>
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20 max-w-xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
          {project.title}
        </h1>
      </div>

      {/* Spacer para empujar la sección de descripción justo después del viewport */}
      <div className="pt-[100vh]" />

      {/* Descripción y detalles, sobre la misma imagen de fondo */}
      <section className="relative z-20 px-8 pb-16 max-w-3xl mx-auto text-white">
        {/* Descripción */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
          <p>{project.description}</p>
        </div>

        {/* Detalles adicionales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h3 className="font-medium">Ubicación</h3>
            <p>{project.location}</p>
          </div>
          <div>
            <h3 className="font-medium">Fecha de finalización</h3>
            <p>{project.dateCompleted}</p>
          </div>
          <div>
            <h3 className="font-medium">Tipo de proyecto</h3>
            <p>{project.projectType}</p>
          </div>
          <div>
            <h3 className="font-medium">Colaboradores</h3>
            <ul className="list-disc list-inside">
              {project.collaborators.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
