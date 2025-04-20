
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { ShareButton } from "./ShareButton";
import { Apple, Music } from "lucide-react";

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
    <Card className="playlist-card overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className={`platform-badge ${platform === "apple" ? "bg-music-apple" : "bg-music-spotify"}`}>
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
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold line-clamp-1">{title}</h3>
              <Link to={`/artist/${artistId}`} className="text-sm text-muted-foreground hover:underline">
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
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium ${
                platform === "apple" ? "text-music-apple" : "text-music-spotify"
              } hover:underline`}
            >
              Listen
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
