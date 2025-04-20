
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getPlaylistById } from "@/data/playlists";
import { getArtistById } from "@/data/artists";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetaTags } from "@/components/MetaTags";

const Playlist = () => {
  const { id } = useParams<{ id: string }>();
  const playlist = getPlaylistById(id || "");
  const artist = playlist ? getArtistById(playlist.artistId) : null;

  if (!playlist || !artist) {
    return (
      <div className="flex min-h-screen flex-col">
        <MetaTags 
          title="Playlist Not Found | BUS Beats Archive"
          description="The playlist you are looking for could not be found."
        />
        <Header />
        <div className="container flex-1 flex items-center justify-center">
          <div className="glass-card p-8 text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Playlist Not Found</h2>
            <p className="mb-6">The playlist you are looking for doesn't exist.</p>
            <Link to="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const playlistTitle = `${playlist.title} | ${artist.name}`;
  const playlistDescription = playlist.description || `A playlist by ${artist.name} on ${playlist.platform === 'apple' ? 'Apple Music' : 'Spotify'}`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <MetaTags 
        title={playlistTitle}
        description={playlistDescription}
        image={playlist.coverImage}
        type="music.playlist"
      />
      
      <Header />
      
      <div className="container py-8">
        <Link to={`/artist/${artist.id}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {artist.name}'s Profile
          </Button>
        </Link>

        <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={playlist.coverImage} 
                  alt={playlist.title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                playlist.platform === "apple" 
                  ? "bg-music-apple/10 text-music-apple" 
                  : "bg-music-spotify/10 text-music-spotify"
              }`}>
                {playlist.platform === "apple" ? "Apple Music" : "Spotify"}
              </div>
              
              <h1 className="text-3xl font-bold mt-4 text-blue-900 dark:text-blue-100">
                {playlist.title}
              </h1>
              
              <p className="mt-2 text-muted-foreground">
                {playlist.description}
              </p>
              
              <div className="mt-4">
                <Link 
                  to={`/artist/${artist.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {artist.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(playlist.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
              </div>
            </div>
          </div>

          {playlist.embedCode && (
            <div className="mt-8">
              <div 
                className="w-full rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 p-4"
                dangerouslySetInnerHTML={{ __html: playlist.embedCode }} 
              />
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Playlist;
