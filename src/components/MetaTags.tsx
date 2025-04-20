
import { useEffect } from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function MetaTags({ 
  title = "BUS Beats Archive | Playlists by BUS Artists", 
  description = "Discover music playlists curated by your favorite BUS artists on Apple Music and Spotify.", 
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = window.location.href,
  type = "website"
}: MetaTagsProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags for search engines
    updateMetaTag("description", description);
    
    // Update Open Graph meta tags
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", image);
    updateMetaTag("og:url", url);
    updateMetaTag("og:type", type);
    
    // Update Twitter meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    
    // Restore default meta tags when component unmounts
    return () => {
      document.title = "BUS Beats Archive | Playlists by BUS Artists";
      updateMetaTag("description", "Discover music playlists curated by your favorite BUS artists on Apple Music and Spotify.");
      updateMetaTag("og:title", "BUS Beats Archive | Playlists by BUS Artists");
      updateMetaTag("og:description", "Discover music playlists curated by your favorite BUS artists on Apple Music and Spotify.");
      updateMetaTag("og:image", "https://lovable.dev/opengraph-image-p98pqg.png");
      updateMetaTag("og:url", window.location.origin);
      updateMetaTag("og:type", "website");
    };
  }, [title, description, image, url, type]);
  
  // Helper function to update meta tags
  const updateMetaTag = (name: string, content: string) => {
    let metaTag = document.querySelector(`meta[property="${name}"]`) || 
                  document.querySelector(`meta[name="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      
      if (name.startsWith('og:')) {
        metaTag.setAttribute('property', name);
      } else {
        metaTag.setAttribute('name', name);
      }
      
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  };
  
  // This component doesn't render anything
  return null;
}
