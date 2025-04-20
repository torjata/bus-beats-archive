
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
          <div className="text-center">
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Artist Hero */}
      <section className="hero-gradient text-white">
        <div className="container py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4 border-white/20">
              <img 
                src={artist.profileImage} 
                alt={artist.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <Link to="/">
                <Button variant="ghost" className="text-white mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">{artist.name}</h1>
              <p className="mt-4 text-xl opacity-80">{artist.description}</p>
              {artist.quote && (
                <blockquote className="mt-6 italic border-l-4 border-white/30 pl-4">
                  "{artist.quote}"
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Playlist Filters */}
      <div className="container mt-8">
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setPlatform("all")}
            className={`px-6 py-2 rounded-full transition-colors ${
              platform === "all" 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            All Platforms
          </button>
          <button 
            onClick={() => setPlatform("apple")}
            className={`px-6 py-2 rounded-full transition-colors ${
              platform === "apple" 
                ? "bg-music-apple text-white" 
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Apple Music
          </button>
          <button 
            onClick={() => setPlatform("spotify")}
            className={`px-6 py-2 rounded-full transition-colors ${
              platform === "spotify" 
                ? "bg-music-spotify text-white" 
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Spotify
          </button>
        </div>
      </div>
      
      {/* Artist Playlists */}
      <section className="container py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{artist.name}'s Playlists</h2>
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
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
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
