// layout.tsx
// This is the global skeleton of your application.
// It defines the basic structure and wraps every page (like a fine prelude in a poetic work).

import './globals.css';
import { ReactNode } from 'react';

/**
 * Metadata for the application.
 *
 * Contains title and description information used by Next.js.
 *
 * @constant
 */
export const metadata = {
  title: 'Mi App con Next.js y Tailwind',
  description: 'Una aplicación estática utilizando la nueva carpeta app de Next.js 13.',
};

/**
 * Props for the RootLayout component.
 *
 * @interface LayoutProps
 * @property {ReactNode} children - The child components to be rendered within the layout.
 */
interface LayoutProps {
  children: ReactNode;
}

/**
 * RootLayout component that provides the global layout for the application.
 *
 * Wraps every page with the necessary HTML structure.
 *
 * @param {LayoutProps} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the layout.
 * @returns {JSX.Element} The global layout component.
 */
export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
