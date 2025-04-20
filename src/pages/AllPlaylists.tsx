
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlaylistCard } from "@/components/PlaylistCard";
import { artists } from "@/data/artists";
import { playlists } from "@/data/playlists";
import { Input } from "@/components/ui/input";
import { Search, Filter, Disc, Music } from "lucide-react";
import { motion } from "framer-motion";

const AllPlaylists = () => {
  const [platform, setPlatform] = useState<"all" | "apple" | "spotify">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const filteredPlaylists = playlists
    .filter(playlist => {
      if (platform !== "all" && playlist.platform !== platform) return false;
      
      const artist = artists.find(a => a.id === playlist.artistId);
      const searchLower = searchTerm.toLowerCase();
      
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
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
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
              Discover BUS Artists' Playlists
            </h1>
            <p className="text-center max-w-2xl mx-auto text-lg text-blue-100 mb-8">
              Explore music curated by your favorite artists. Filter, search, and find new sounds.
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
              <div className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                isSearchFocused ? "ring-2 ring-blue-400 shadow-lg" : "ring-1 ring-white/30 dark:ring-white/10"
              }`}>
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors ${
                  isSearchFocused ? "text-blue-500" : "text-muted-foreground"
                }`} />
                <Input 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search by title, artist, or description..." 
                  className="pl-10 pr-4 py-6 text-base bg-white/70 dark:bg-black/40 backdrop-blur-xl border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    ×
                  </button>
                )}
              </div>
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
