
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
    <Link to={`/playlist/${id}`} className="block transform transition-all duration-300 hover:scale-102 hover:-translate-y-1">
      <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-white/10 via-white/5 to-white/0 backdrop-blur-md border border-white/20 dark:border-white/10">
        <div className="relative">
          {/* Platform Badge */}
          <div className={`absolute top-3 right-3 z-10 rounded-full px-2 py-1 text-xs font-medium text-white backdrop-blur-md ${
            platform === "apple" ? "bg-music-apple/80" : "bg-music-spotify/80"
          }`}>
            {platform === "apple" ? (
              <div className="flex items-center gap-1">
                <Apple className="h-3 w-3" />
                <span>Music</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <Music className="h-3 w-3" />
                <span>Spotify</span>
              </div>
            )}
          </div>
          
          {/* Album Cover */}
          <AspectRatio ratio={1} className="overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30"></div>
          </AspectRatio>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-base md:text-lg line-clamp-1 text-blue-900 dark:text-blue-100">
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
              className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                platform === "apple" 
                  ? "bg-music-apple/10 text-music-apple hover:bg-music-apple/20" 
                  : "bg-music-spotify/10 text-music-spotify hover:bg-music-spotify/20"
              }`}
            >
              Listen
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
