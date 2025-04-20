
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ArtistCardProps {
  id: string;
  name: string;
  profileImage: string;
  description: string;
  playlistCount: number;
}

export function ArtistCard({ id, name, profileImage, description, playlistCount }: ArtistCardProps) {
  return (
    <Link to={`/artist/${id}`} className="artist-card block p-3 h-full">
      <div className="overflow-hidden rounded-xl">
        <AspectRatio ratio={1}>
          <img 
            src={profileImage} 
            alt={name} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </AspectRatio>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">{name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <p className="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400">{playlistCount} playlists</p>
      </div>
    </Link>
  );
}
