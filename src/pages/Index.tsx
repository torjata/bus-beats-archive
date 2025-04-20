import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArtistCard } from "@/components/ArtistCard";
import { PlaylistCard } from "@/components/PlaylistCard";
import { artists } from "@/data/artists";
import { playlists, getPlaylistCount } from "@/data/playlists";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroAnimation from "@/components/HeroAnimation";
import { MetaTags } from "@/components/MetaTags";

const Index = () => {
  const [platform, setPlatform] = useState<"all" | "apple" | "spotify">("all");
  const featuredPlaylists = playlists.slice(0, 6);
  
  const filteredPlaylists = platform === "all" 
    ? featuredPlaylists 
    : featuredPlaylists.filter(playlist => playlist.platform === platform);

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
      {/* Meta Tags for sharing */}
      <MetaTags />
      
      <Header />
      
      {/* Hero Section with WebGL Animation */}
      <section className="relative overflow-hidden">
        <HeroAnimation />
        
        {/* Content overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="container relative z-20 py-16 md:py-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mb-6 inline-block"
              >
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-lg shadow-blue-500/10">
                  <h2 className="text-lg font-medium text-white">Because of you I shine</h2>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">BUS Beats Archive</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl mb-10 text-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Discover the music that inspires your favorite BUS artists. 
                Explore curated playlists from all 12 members on Apple Music and Spotify.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button 
                  onClick={() => setPlatform("all")}
                  className={`px-6 py-6 rounded-full transition-colors text-base gap-2 ${
                    platform === "all" 
                      ? "bg-white text-blue-600 border-2 border-white hover:bg-blue-50" 
                      : "bg-white/20 border border-white/30 hover:bg-white/30 text-white backdrop-blur-md"
                  }`}
                >
                  All Platforms
                </Button>
                <Button 
                  onClick={() => setPlatform("apple")}
                  className={`px-6 py-6 rounded-full transition-colors text-base gap-2 ${
                    platform === "apple" 
                      ? "bg-music-apple text-white border border-music-apple hover:bg-music-apple/90" 
                      : "bg-white/20 border border-white/30 hover:bg-white/30 text-white backdrop-blur-md"
                  }`}
                >
                  <Apple className="h-5 w-5 mr-1" /> Apple Music
                </Button>
                <Button 
                  onClick={() => setPlatform("spotify")}
                  className={`px-6 py-6 rounded-full transition-colors text-base gap-2 ${
                    platform === "spotify" 
                      ? "bg-music-spotify text-white border border-music-spotify hover:bg-music-spotify/90" 
                      : "bg-white/20 border border-white/30 hover:bg-white/30 text-white backdrop-blur-md"
                  }`}
                >
                  <Music className="h-5 w-5 mr-1" /> Spotify
                </Button>
              </motion.div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link to="/playlists">
                  <Button variant="link" className="text-blue-100 hover:text-white gap-2">
                    View All Playlists <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <motion.section 
        className="container py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100">Latest Playlists</h2>
          <Link to="/playlists" className="blue-glass px-4 py-2 text-sm text-blue-800 dark:text-blue-100 hover:bg-blue-500/20 transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  embedCode={playlist.embedCode}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Artists Section */}
      <section className="bg-gradient-to-r from-blue-100/50 to-indigo-100/50 py-12 dark:from-blue-900/30 dark:to-indigo-900/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 dark:text-blue-100">Meet The Artists</h2>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {artists.map((artist) => (
              <motion.div key={artist.id} variants={itemVariants}>
                <ArtistCard
                  id={artist.id}
                  name={artist.name}
                  profileImage={artist.profileImage}
                  description={artist.description}
                  playlistCount={getPlaylistCount(artist.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="container py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{artists.length}</p>
            <p className="text-blue-900 dark:text-blue-100 font-medium">Artists</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{playlists.length}</p>
            <p className="text-blue-900 dark:text-blue-100 font-medium">Playlists</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">2</p>
            <p className="text-blue-900 dark:text-blue-100 font-medium">Streaming Platforms</p>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Index;
