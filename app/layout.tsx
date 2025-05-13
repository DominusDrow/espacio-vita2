"use client"
import './globals.css';
import { ReactNode, useState } from 'react';
import Footer from './components/Footer';
import MiniNav from './components/MiniNav';
import ContactForm from './components/ContactForm';

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
        <MiniNav />
        <ContactForm />
          {children}
        <Footer/>
      </body>
    </html>
  );
}