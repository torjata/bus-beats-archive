
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlaylistCard } from "@/components/PlaylistCard";
import { artists } from "@/data/artists";
import { playlists } from "@/data/playlists";
import { SearchBar } from "@/components/SearchBar";
import { Search, Disc, Music, Apple } from "lucide-react";
import { motion } from "framer-motion";
import { MetaTags } from "@/components/MetaTags";

const AllPlaylists = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const querySearchTerm = searchParams.get("search") || "";
  
  const [platform, setPlatform] = useState<"all" | "apple" | "spotify">("all");
  const [searchTerm, setSearchTerm] = useState(querySearchTerm);
  
  // Update URL when search changes
  useEffect(() => {
    if (searchTerm) {
      searchParams.set("search", searchTerm);
    } else {
      searchParams.delete("search");
    }
    
    const newUrl = searchParams.toString() 
      ? `${location.pathname}?${searchParams}` 
      : location.pathname;
    
    navigate(newUrl, { replace: true });
  }, [searchTerm]);
  
  // Update search term when URL changes
  useEffect(() => {
    setSearchTerm(querySearchTerm);
  }, [querySearchTerm]);
  
  const filteredPlaylists = playlists
    .filter(playlist => {
      if (platform !== "all" && playlist.platform !== platform) return false;
      
      const artist = artists.find(a => a.id === playlist.artistId);
      const searchLower = searchTerm.toLowerCase();
      
      if (!searchTerm) return true;
      
      return (
        playlist.title.toLowerCase().includes(searchLower) ||
        playlist.description.toLowerCase().includes(searchLower) ||
        (artist && artist.name.toLowerCase().includes(searchLower))
      );
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  const pageTitle = searchTerm 
    ? `Search: ${searchTerm} | BUS Beats Archive` 
    : "All Playlists | BUS Beats Archive";
    
  const pageDescription = searchTerm
    ? `Playlists matching "${searchTerm}" from BUS artists on Apple Music and Spotify`
    : "Discover all music playlists curated by your favorite BUS artists on Apple Music and Spotify";
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <MetaTags 
        title={pageTitle}
        description={pageDescription}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white">
        <div className="container py-12 md:py-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-indigo-400/20 blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-50 drop-shadow-lg">
              {searchTerm ? `Results for "${searchTerm}"` : "Discover BUS Artists' Playlists"}
            </h1>
            <p className="text-center max-w-2xl mx-auto text-lg text-blue-100 mb-8">
              {searchTerm 
                ? `Found ${filteredPlaylists.length} playlists matching your search`
                : "Explore music curated by your favorite artists. Filter, search, and find new sounds."
              }
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filters */}
      <div className="container -mt-8 relative z-20">
        <div className="glass-card p-4 md:p-6 rounded-2xl shadow-xl border border-white/30 dark:border-white/10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <SearchBar 
                className="w-full" 
                isOpen={true}
              />
            </div>
            
            {/* Platform Filters */}
            <div className="flex gap-2">
              <button 
                onClick={() => setPlatform("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  platform === "all" 
                    ? "bg-blue-500 text-white shadow-lg" 
                    : "bg-white/40 text-blue-700 hover:bg-white/60 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-800/40"
                }`}
              >
                <Disc className="h-4 w-4" />
                <span>All</span>
              </button>
              <button 
                onClick={() => setPlatform("apple")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  platform === "apple" 
                    ? "bg-music-apple text-white shadow-lg" 
                    : "bg-white/40 text-blue-700 hover:bg-white/60 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-800/40"
                }`}
              >
                <Apple className="h-4 w-4" />
                <span>Apple</span>
              </button>
              <button 
                onClick={() => setPlatform("spotify")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  platform === "spotify" 
                    ? "bg-music-spotify text-white shadow-lg" 
                    : "bg-white/40 text-blue-700 hover:bg-white/60 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-800/40"
                }`}
              >
                <Music className="h-4 w-4" />
                <span>Spotify</span>
              </button>
            </div>
          </div>
          
          {/* Search Stats */}
          <div className="mt-4 text-sm text-blue-700 dark:text-blue-300">
            {searchTerm ? (
              <p>Found {filteredPlaylists.length} results for "{searchTerm}"</p>
            ) : (
              <p>Showing {filteredPlaylists.length} playlists {platform !== "all" ? `on ${platform}` : ""}</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Playlists Grid */}
      <motion.section 
        className="container py-8 flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredPlaylists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaylists.map((playlist) => {
              const artist = artists.find((a) => a.id === playlist.artistId);
              return (
                <motion.div key={playlist.id} variants={itemVariants}>
                  <PlaylistCard
                    id={playlist.id}
                    title={playlist.title}
                    coverImage={playlist.coverImage}
                    description={playlist.description}
                    platform={playlist.platform}
                    externalUrl={playlist.externalUrl}
                    artistId={playlist.artistId}
                    artistName={artist?.name || ""}
                    date={playlist.date}
                  />
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 glass-card my-8">
            <Music className="h-16 w-16 mx-auto text-blue-300 opacity-40 mb-4" />
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">No playlists found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default AllPlaylists;
