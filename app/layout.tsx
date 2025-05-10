import './globals.css';
import { ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/PageHead';
import MiniNav from './components/MiniNav';

export const metadata = {
  title: 'Mi App con Next.js y Tailwind',
  description: 'Una aplicación estática utilizando la nueva carpeta app de Next.js 13.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="es">
      <head>
        <title>Grupo Espacio Vita</title>
        <meta name="description" content="Espacio de Arquitectura y Carpintería" />
      </head>
      <body className="min-h-screen">
        <MiniNav/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}