// app/projects/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects, Project } from '../../data/projects';

export const metadata = {
  title: 'Proyectos de Arquitectura',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-16 px-6 lg:px-16">
      <main className="flex flex-col space-y-12">
        {projects.map((proj: Project) => (
          <Link
            key={proj.slug}
            href={`/projects/${proj.slug}`}
            className="relative block w-full h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden shadow-lg transform scale-100 transition-shadow transition-transform duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 focus:shadow-2xl focus:scale-105"
          >
            {/* Imagen de fondo */}
            <Image
              src={proj.images[0]}
              alt={proj.title}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Overlay de gradiente para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />

            {/* Contenido sobre la imagen */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h2 className="text-4xl font-extrabold mb-2 drop-shadow-lg">
                {proj.title}
              </h2>
              <p className="text-lg font-medium mb-4 line-clamp-3 drop-shadow">
                {proj.description}
              </p>
              <span className="self-start text-sm font-semibold uppercase tracking-wide text-indigo-300 hover:text-indigo-100 transition-colors">
                Ver detalles →
              </span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
