
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  isOpen?: boolean;
  onClose?: () => void;
  autoFocus?: boolean;
  className?: string;
}

export function SearchBar({ isOpen = true, onClose, autoFocus = false, className = "" }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  
  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/playlists?search=${encodeURIComponent(searchTerm)}`);
      if (onClose) onClose();
      setSearchTerm("");
    }
  };
  
  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  
  // Auto focus if the component is newly opened
  useEffect(() => {
    if (autoFocus && isOpen) {
      // Small timeout to ensure the DOM is ready
      const timer = setTimeout(() => {
        const inputElement = document.querySelector('input[name="search"]') as HTMLInputElement;
        if (inputElement) inputElement.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoFocus]);
  
  if (!isOpen) return null;
  
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
        isFocused ? "ring-2 ring-blue-400 shadow-lg" : "ring-1 ring-white/30 dark:ring-white/10"
      }`}>
        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors ${
          isFocused ? "text-blue-500" : "text-muted-foreground"
        }`} />
        <Input 
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          placeholder="Search playlists, artists..." 
          className="pl-10 pr-10 py-6 text-base bg-white/70 dark:bg-black/40 backdrop-blur-xl border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          autoFocus={autoFocus}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </form>
  );
}
