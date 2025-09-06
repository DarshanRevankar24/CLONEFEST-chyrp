import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="container-page py-6 text-sm flex flex-col sm:flex-row gap-2 sm:gap-6">
        <p>© {new Date().getFullYear()} Chyrp Modern</p>
        <nav className="flex gap-4">
          <Link className="link" to="/sitemap">Sitemap</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
