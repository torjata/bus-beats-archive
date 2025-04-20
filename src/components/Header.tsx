
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-backdrop-blur:bg-background/60 border-b">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center gap-2">
            <span className="hidden font-bold sm:inline-block text-xl bg-gradient-to-r from-music-purple to-music-purple-dark bg-clip-text text-transparent">
              BUS Beats
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/artists" className="transition-colors hover:text-primary">
              Artists
            </Link>
            <Link to="/playlists" className="transition-colors hover:text-primary">
              Playlists
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="container pb-4">
          <SearchBar 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)}
            autoFocus={true}
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/artists"
              className="rounded-md px-3 py-2 text-sm hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Artists
            </Link>
            <Link
              to="/playlists"
              className="rounded-md px-3 py-2 text-sm hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Playlists
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
