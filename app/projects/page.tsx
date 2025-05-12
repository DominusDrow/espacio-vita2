// app/projects/page.tsx
import React from 'react';
import Link from 'next/link';
import { projects } from '../../data/projects';

export const metadata = {
  title: 'Proyectos de Arquitectura',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow py-4 px-8">
        <h1 className="text-2xl font-semibold">Proyectos de Arquitectura</h1>
      </header>

      <main className="p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <Link
            key={proj.slug}
            href={`/projects/${proj.slug}`}
            className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-medium mb-2">{proj.title}</h2>
            <p className="text-gray-600 line-clamp-2">{proj.description}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}
