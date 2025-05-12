import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header básico */}
      <header className="bg-white shadow-md py-4 px-8">
        <h1 className="text-2xl font-semibold">Upper Cairns Terrace</h1>
      </header>

      {/* Navegación a proyectos */}
      <nav className="bg-gray-50 border-b px-8 py-2">
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Volver a Proyectos
        </Link>
      </nav>

      {/* Contenido principal */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Asegúrate de colocar "upper_cairns_terrace.png" dentro de la carpeta /public */}
          <Image
            src="/upper_cairns_terrace.png"
            alt="Upper Cairns Terrace"
            width={1915}
            height={992}
            priority
            className="rounded-lg shadow-lg"
          />

          {/* Descripción */}
          <section className="mt-6 bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700">
              A beautiful residential project located in St Lucia, QLD, Australia. This modern terrace blends nature and architecture seamlessly.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page;
