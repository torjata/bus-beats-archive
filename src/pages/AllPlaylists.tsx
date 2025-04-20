
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlaylistCard } from "@/components/PlaylistCard";
import { artists } from "@/data/artists";
import { playlists } from "@/data/playlists";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AllPlaylists = () => {
  const [platform, setPlatform] = useState<"all" | "apple" | "spotify">("all");
  const [searchTerm, setSearchTerm] = useState("");
  
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="hero-gradient text-white">
        <div className="container py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">All Playlists</h1>
          <p className="text-center max-w-2xl mx-auto">
            Explore all the playlists created by BUS artists on Apple Music and Spotify.
          </p>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="container py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search playlists..." 
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button 
              onClick={() => setPlatform("all")}
              className={`px-4 py-2 rounded-md transition-colors flex-1 md:flex-none ${
                platform === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setPlatform("apple")}
              className={`px-4 py-2 rounded-md transition-colors flex-1 md:flex-none ${
                platform === "apple" 
                  ? "bg-music-apple text-white" 
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              Apple
            </button>
            <button 
              onClick={() => setPlatform("spotify")}
              className={`px-4 py-2 rounded-md transition-colors flex-1 md:flex-none ${
                platform === "spotify" 
                  ? "bg-music-spotify text-white" 
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              Spotify
            </button>
          </div>
        </div>
      </section>
      
      {/* Playlists Grid */}
      <section className="container py-8 flex-1">
        {filteredPlaylists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No playlists found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default AllPlaylists;
