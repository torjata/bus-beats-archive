
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/MetaTags";

const Artists = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
    <MetaTags
      title="Artists | BUS Beats"
      description="Discover all BUS artists and explore their curated playlists."
      image="/logo.png"
      url="/artists"
    />
    <Header />
    <main className="flex-1 container py-16 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-blue-100">Artists</h1>
      <p className="text-muted-foreground mb-12">All artists featured in BUS Beats will appear here soon!</p>
      {/* สามารถเพิ่มรายชื่อศิลปินหรือ ArtistCard ตามต้องการ */}
    </main>
    <Footer />
  </div>
);

export default Artists;
