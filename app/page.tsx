// page.tsx
// The main page rendered at the root route.
// Here we orchestrate components and breathe life into the narrative of your application.

import Button from './components/Button';

/**
 * HomePage component that serves as the landing page of the application.
 *
 * This component displays a welcoming title and a button to invite users to explore the universe of Next.js.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
export default function HomePage(): JSX.Element {
  /**
   * Handles the click event for the button.
   *
   * Logs a message to the console when the button is clicked.
   *
   * @function handleClick
   * @returns {void}
   */
  const handleClick = (): void => {
    console.log('¡El botón de la nueva era ha sido presionado!');
  };

  return (
    <main className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a la nueva era de Next.js</h1>
      <Button label="Explora este universo" />
    </main>
  );
}
