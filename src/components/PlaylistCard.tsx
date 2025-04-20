
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { ShareButton } from "./ShareButton";
import { Apple, Music } from "lucide-react";
import { useState } from "react";

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
  embedCode,
}: PlaylistCardProps) {
  const [showEmbed, setShowEmbed] = useState(false);
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="playlist-card overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
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
          {!showEmbed && (
            <AspectRatio ratio={1}>
              <img
                src={coverImage}
                alt={title}
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          )}
          {showEmbed && embedCode && (
            <div className="embed-container" dangerouslySetInnerHTML={{ __html: embedCode }} />
          )}
        </div>
        <div className="p-4 bg-gradient-to-b from-white/5 to-white/20 backdrop-blur-md dark:from-black/5 dark:to-black/20">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold line-clamp-1 text-blue-900 dark:text-blue-100">{title}</h3>
              <Link to={`/artist/${artistId}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                {artistName}
              </Link>
            </div>
            <ShareButton url={`/playlist/${id}`} title={`${title} by ${artistName}`} />
          </div>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
            <div className="flex gap-2">
              {embedCode && (
                <button 
                  onClick={() => setShowEmbed(!showEmbed)} 
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    showEmbed 
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" 
                      : "bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-300"
                  }`}
                >
                  {showEmbed ? "Hide Player" : "Play"}
                </button>
              )}
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium hover:underline ${
                  platform === "apple" ? "text-music-apple" : "text-music-spotify"
                }`}
              >
                Listen
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
