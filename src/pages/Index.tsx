
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArtistCard } from "@/components/ArtistCard";
import { PlaylistCard } from "@/components/PlaylistCard";
import { artists } from "@/data/artists";
import { playlists, getPlaylistCount } from "@/data/playlists";

const Index = () => {
  const [platform, setPlatform] = useState<"all" | "apple" | "spotify">("all");
  const featuredPlaylists = playlists.slice(0, 6);
  
  const filteredPlaylists = platform === "all" 
    ? featuredPlaylists 
    : featuredPlaylists.filter(playlist => playlist.platform === platform);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">BUS Beats Archive</h1>
            <p className="text-lg md:text-xl mb-8">
              Discover the music that inspires your favorite BUS artists. 
              Explore curated playlists from all 12 members on Apple Music and Spotify.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setPlatform("all")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  platform === "all" 
                    ? "bg-white text-blue-600" 
                    : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                All Platforms
              </button>
              <button 
                onClick={() => setPlatform("apple")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  platform === "apple" 
                    ? "bg-music-apple text-white" 
                    : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                Apple Music
              </button>
              <button 
                onClick={() => setPlatform("spotify")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  platform === "spotify" 
                    ? "bg-music-spotify text-white" 
                    : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                Spotify
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100">Latest Playlists</h2>
          <div className="blue-glass px-4 py-2 text-sm text-blue-800 dark:text-blue-100">Because of you I shine</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredPlaylists.map((playlist) => {
            const artist = artists.find((a) => a.id === playlist.artistId);
            return (
              <PlaylistCard
                key={playlist.id}
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
            );
          })}
        </div>
      </section>

      {/* Artists Section */}
      <section className="bg-gradient-to-r from-blue-100 to-indigo-100 py-12 dark:from-blue-900/30 dark:to-indigo-900/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 dark:text-blue-100">Meet The Artists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 animate-scale-in">
            {artists.map((artist) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                profileImage={artist.profileImage}
                description={artist.description}
                playlistCount={getPlaylistCount(artist.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-16">
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
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
