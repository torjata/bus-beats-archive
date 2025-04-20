
export interface Artist {
  id: string;
  name: string;
  profileImage: string;
  description: string;
  quote?: string;
}

// Mock data for the 12 BUS artists
export const artists: Artist[] = [
  {
    id: "bambam",
    name: "BamBam",
    profileImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "BamBam is known for his energetic dance style and often shares playlists that reflect his dynamic personality.",
    quote: "Music helps me express myself beyond language barriers."
  },
  {
    id: "ten",
    name: "Ten",
    profileImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "Ten's dance background influences his eclectic music taste spanning multiple genres.",
    quote: "I find inspiration in sounds that make me move."
  },
  {
    id: "lisa",
    name: "Lisa",
    profileImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    description: "Lisa's playlists often feature a mix of hip-hop and international beats that inspire her performances.",
    quote: "Music is the universal language that connects us all."
  },
  {
    id: "jackson",
    name: "Jackson",
    profileImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Jackson's versatile music taste reflects his multicultural background and global influences.",
    quote: "I listen to whatever makes me feel something real."
  },
  {
    id: "minnie",
    name: "Minnie",
    profileImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Minnie's soothing voice is reflected in her playlists that feature vocals and harmonies.",
    quote: "Songs that tell stories are the ones that stay with you."
  },
  {
    id: "nichkhun",
    name: "Nichkhun",
    profileImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "Nichkhun's playlists often feature a blend of Korean, Thai, and international hits.",
    quote: "Good music transcends borders and cultures."
  },
  {
    id: "jae",
    name: "Jae",
    profileImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
    description: "Jae's rock influences and guitar skills are evident in his alternative music selections.",
    quote: "The right song can change your whole perspective."
  },
  {
    id: "sorn",
    name: "Sorn",
    profileImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "Sorn's playlists feature a mix of pop, indie, and acoustic tracks that inspire her creativity.",
    quote: "Music is where I find my peace in the chaos."
  },
  {
    id: "mark",
    name: "Mark",
    profileImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "Mark's playlists often showcase his love for rap and hip-hop with both mainstream and underground artists.",
    quote: "The rhythm of the beat is what moves me forward."
  },
  {
    id: "tiffany",
    name: "Tiffany",
    profileImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Tiffany's diverse musical background is reflected in her eclectic playlists spanning pop, R&B, and EDM.",
    quote: "Every playlist tells a different chapter of my story."
  },
  {
    id: "bamjackson",
    name: "BamJackson",
    profileImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "BamJackson's collaborative playlists showcase the duo's shared taste in high-energy beats.",
    quote: "When we combine our musical tastes, magic happens."
  },
  {
    id: "nichachu",
    name: "Nichachu",
    profileImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Nichachu creates themed playlists for different moods and occasions, perfect for any moment.",
    quote: "There's a playlist for every feeling and every memory."
  }
];

export function getArtistById(id: string): Artist | undefined {
  return artists.find(artist => artist.id === id);
}
