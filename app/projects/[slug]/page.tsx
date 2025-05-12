import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, Project } from '../../../data/projects';

interface Params {
  params: { slug: string };
}

export function generateStaticParams(): { slug: string }[] {
  return projects.map((proj) => ({ slug: proj.slug }));
}

export default async function ProjectPage({ params }: Params) {
  // Next.js App Router requires awaiting params before accessing
  const { slug } = await params;
  const project: Project | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    return null; // Next.js renderizará 404 automáticamente si no hay contenido
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow py-4 px-8">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
      </header>

      <nav className="bg-gray-50 border-b px-8 py-2">
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Volver a Proyectos
        </Link>
      </nav>

      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1200}
            height={800}
            priority
            className="rounded-lg shadow-lg"
          />
          <section className="mt-6 bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700">{project.description}</p>
          </section>
        </div>
      </main>
    </div>
  );
}
