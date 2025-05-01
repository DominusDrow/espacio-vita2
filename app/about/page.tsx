import Link from "next/link";

/**
 * About page component.
 *
 * This component renders the "About" page with a title and a link
 * to navigate back to the home page.
 *
 * @component
 * @returns {JSX.Element} The About page content.
 */
export default function About(): JSX.Element {
  return (
    <>
      <h1>About</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
