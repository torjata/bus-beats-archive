
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Apple, Music } from "lucide-react";
import { ShareButton } from "./ShareButton";

interface PlaylistCardProps {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  platform: "apple" | "spotify";
  externalUrl: string;
  artistId: string;
  artistName: string;
  date: string;
  embedCode?: string;
}

export function PlaylistCard({
  id,
  title,
  coverImage,
  description,
  platform,
  externalUrl,
  artistId,
  artistName,
  date,
}: PlaylistCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link to={`/playlist/${id}`} className="playlist-card group block">
      <div className="relative overflow-hidden">
        <div className={`platform-badge ${platform === "apple" ? "bg-music-apple/80" : "bg-music-spotify/80"}`}>
          {platform === "apple" ? (
            <div className="flex items-center gap-1">
              <Apple className="h-3 w-3" />
              <span>Apple Music</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Music className="h-3 w-3" />
              <span>Spotify</span>
            </div>
          )}
        </div>
        <AspectRatio ratio={1}>
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>
      <div className="p-4 bg-gradient-to-b from-white/5 to-white/20 backdrop-blur-md dark:from-black/5 dark:to-black/20">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold line-clamp-1 text-blue-900 dark:text-blue-100">
              {title}
            </h3>
            <Link 
              to={`/artist/${artistId}`} 
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {artistName}
            </Link>
          </div>
          <ShareButton 
            url={`/playlist/${id}`} 
            title={`${title} by ${artistName}`} 
          />
        </div>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`text-xs font-medium hover:underline ${
              platform === "apple" ? "text-music-apple" : "text-music-spotify"
            }`}
          >
            Listen
          </a>
        </div>
      </div>
    </Link>
  );
}
