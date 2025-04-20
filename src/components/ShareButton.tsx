
import { Share } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonProps {
  url: string;
  title: string;
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = window.location.origin + url;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast("Link copied to clipboard!");
    setIsOpen(false);
  };

  const handleShare = (platform: string) => {
    let shareLink = "";
    
    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, "_blank", "noopener,noreferrer");
    }
    
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Share"
        >
          <Share className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        <DropdownMenuItem onClick={() => handleShare("facebook")}>
          Share to Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("twitter")}>
          Share to Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink}>
          Copy link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
