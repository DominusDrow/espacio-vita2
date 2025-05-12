"use client"
import './globals.css';
import { ReactNode, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/PageHead';
import MiniNav from './components/MiniNav';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
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
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}