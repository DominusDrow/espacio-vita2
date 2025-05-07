import React from 'react';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="page-container">
      {/* Título de la página */}
      <h1 className="page-title">Upper Cairns Terrace</h1>
      
      {/* Contenedor de la imagen */}
      <div className="image-container">
        <Image
          src="/upper_cairns_terrace.png" // Asegúrate de colocar la ruta correcta en public/
          alt="Upper Cairns Terrace"
          width={1915}
          height={992}
          layout="responsive"
          priority
        />
      </div>

      {/* Descripción de la imagen */}
      <div className="description-container">
        <p className="description-text">
          A beautiful residential project located in St Lucia, QLD, Australia. This modern terrace blends nature and architecture seamlessly.
        </p>
      </div>
    </div>
  );
};

export default Page;
