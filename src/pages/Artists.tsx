
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/MetaTags";
import { ArtistCard } from "@/components/ArtistCard";
import { artists } from "@/data/artists";
import { getPlaylistCount } from "@/data/playlists";

const Artists = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
    <MetaTags
      title="Artists | BUS Beats"
      description="Discover all BUS artists and explore their curated playlists."
      image="/logo.png"
      url="/artists"
    />
    <Header />
    <main className="flex-1 container py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-blue-100 text-center">Artists</h1>
      <p className="text-muted-foreground mb-12 text-center">ศิลปินทุกคนใน BUS Beats พร้อมลิงก์ไปยังโปรไฟล์และเพลย์ลิสต์ของแต่ละคน</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
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
    </main>
    <Footer />
  </div>
);

export default Artists;
