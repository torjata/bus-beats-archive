
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlaylistCard } from "@/components/PlaylistCard";
import { getArtistById } from "@/data/artists";
import { getPlaylistsByArtistId } from "@/data/playlists";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Artist = () => {
  const { id } = useParams<{ id: string }>();
  const [platform, setPlatform] = useState<"all" | "apple" | "spotify">("all");
  
  const artist = getArtistById(id || "");
  const allArtistPlaylists = getPlaylistsByArtistId(id || "");
  
  const artistPlaylists = platform === "all" 
    ? allArtistPlaylists 
    : allArtistPlaylists.filter(playlist => playlist.platform === platform);

  if (!artist) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="container flex-1 flex items-center justify-center">
          <div className="glass-card p-8 text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Artist Not Found</h2>
            <p className="mb-6">The artist you are looking for doesn't exist.</p>
            <Link to="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <Header />
      
      {/* Artist Hero */}
      <section className="bg-gradient-to-br from-blue-400 to-blue-600 text-white backdrop-blur-lg">
        <div className="container py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4 border-white/40 shadow-xl">
              <img 
                src={artist.profileImage} 
                alt={artist.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <Link to="/">
                <Button variant="ghost" className="text-white mb-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/10">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">{artist.name}</h1>
              <p className="mt-4 text-xl opacity-90">{artist.description}</p>
              {artist.quote && (
                <blockquote className="mt-6 italic border-l-4 border-white/40 pl-4 py-2 bg-white/10 backdrop-blur-sm rounded-r-lg">
                  "{artist.quote}"
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Playlist Filters */}
      <div className="container mt-8">
        <div className="blue-glass p-4 md:p-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <button 
            onClick={() => setPlatform("all")}
            className={`px-6 py-2 rounded-full transition-colors ${
              platform === "all" 
                ? "bg-blue-500 text-white shadow-lg" 
                : "bg-blue-100/80 text-blue-800 hover:bg-blue-200/80 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-800/30"
            }`}
          >
            All Platforms
          </button>
          <button 
            onClick={() => setPlatform("apple")}
            className={`px-6 py-2 rounded-full transition-colors ${
              platform === "apple" 
                ? "bg-music-apple text-white shadow-lg" 
                : "bg-blue-100/80 text-blue-800 hover:bg-blue-200/80 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-800/30"
            }`}
          >
            Apple Music
          </button>
          <button 
            onClick={() => setPlatform("spotify")}
            className={`px-6 py-2 rounded-full transition-colors ${
              platform === "spotify" 
                ? "bg-music-spotify text-white shadow-lg" 
                : "bg-blue-100/80 text-blue-800 hover:bg-blue-200/80 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-800/30"
            }`}
          >
            Spotify
          </button>
        </div>
      </div>
      
      {/* Artist Playlists */}
      <section className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900 dark:text-blue-100">{artist.name}'s Playlists</h2>
        {artistPlaylists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artistPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                title={playlist.title}
                coverImage={playlist.coverImage}
                description={playlist.description}
                platform={playlist.platform}
                externalUrl={playlist.externalUrl}
                artistId={playlist.artistId}
                artistName={artist.name}
                date={playlist.date}
                embedCode={playlist.embedCode}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card text-center py-12">
            <p className="text-muted-foreground">
              {platform === "all" 
                ? "No playlists found for this artist." 
                : `No ${platform} playlists found for this artist.`}
            </p>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Artist;
