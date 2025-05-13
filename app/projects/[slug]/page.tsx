import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, Project } from '../../../data/projects';
import { Poppins } from 'next/font/google';
import Gallery from 'app/components/Gallery';

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
  
  const imgs = project.images;

  return (
    <>
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
          style={{ height: '3rem' }}
        >
          <div className="flex flex-col transition-transform duration-200 ease-in-out group-hover:-translate-y-[3rem]">
            <span
              className={`text-4xl sm:text-5xl ${poppins.className} font-extrabold uppercase tracking-tight text-white drop-shadow-2xl`}
            >
              Espacio Vita
            </span>
            <span
              className={`text-4xl sm:text-5xl ${poppins.className} font-extrabold uppercase tracking-tight text-white drop-shadow-2xl`}
            >
              Espacio Vita
            </span>
          </div>
        </Link>
      </header>
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20 max-w-xl">
        <h1
          className={`text-6xl sm:text-7xl md:text-8xl ${poppins.className} font-extrabold uppercase tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white drop-shadow-2xl`}
        >
          {project.title}
        </h1>
      </div>


      {/* Spacer para empujar la sección de descripción justo después del viewport */}
      <div className="pt-[100vh]" />

      {/* Descripción y detalles, sobre la misma imagen de fondo */}
      <section
        className="relative z-20 px-8 pb-16 max-w-3xl ml-auto text-right text-white"
      >
        {/* Descripción */}
        <div className="mb-12">
          <h2
            className={`text-4xl sm:text-5xl ${poppins.className} font-extrabold uppercase tracking-tight drop-shadow-lg mb-4`}
          >
            Descripción
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-100">
            {project.description}
          </p>
        </div>

        {/* Detalles adicionales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3
              className={`text-2xl ${poppins.className} font-semibold uppercase tracking-wide mb-2`}
            >
              Ubicación
            </h3>
            <p className="text-base font-medium text-gray-100">
              {project.location}
            </p>
          </div>
          <div>
            <h3
              className={`text-2xl ${poppins.className} font-semibold uppercase tracking-wide mb-2`}
            >
              Fecha de finalización
            </h3>
            <p className="text-base font-medium text-gray-100">
              {project.dateCompleted}
            </p>
          </div>
          <div>
            <h3
              className={`text-2xl ${poppins.className} font-semibold uppercase tracking-wide mb-2`}
            >
              Tipo de proyecto
            </h3>
            <p className="text-base font-medium text-gray-100">
              {project.projectType}
            </p>
          </div>
          <div>
            <h3
              className={`text-2xl ${poppins.className} font-semibold uppercase tracking-wide mb-2`}
            >
              Colaboradores
            </h3>
            <ul className="list-disc list-inside text-base font-medium text-gray-100 space-y-1">
              {project.collaborators.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>


    </div>

    {/* GALLERY LAYOUT */}
    <Gallery imgs={project.images} title={project.title} />

    </>
  );
}
