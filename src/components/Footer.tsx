
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} BUS Beats Archive. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/artists" className="transition-colors hover:text-foreground">
            Artists
          </Link>
          <Link to="/playlists" className="transition-colors hover:text-foreground">
            All Playlists
          </Link>
        </nav>
      </div>
    </footer>
  );
}
