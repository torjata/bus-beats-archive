
export interface Artist {
  id: string;
  name: string;
  profileImage: string;
  description: string;
  quote?: string;
}

// BUS artists data
export const artists: Artist[] = [
  {
    id: "alan",
    name: "Alan",
    profileImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Alan is a charismatic performer known for his powerful vocals and stage presence.",
    quote: "Music is what feelings sound like."
  },
  {
    id: "marckris",
    name: "Marckris",
    profileImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "Marckris blends different musical influences into his unique playlists that reflect his creative journey.",
    quote: "Every playlist tells a different story about who we are."
  },
  {
    id: "khunpol",
    name: "Khunpol",
    profileImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "Khunpol's music taste spans across multiple genres, creating eclectic and surprising playlists.",
    quote: "Great music doesn't just make you dance; it makes you feel."
  },
  {
    id: "heart",
    name: "Heart",
    profileImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Heart curates playlists that are as warm and inviting as her personality.",
    quote: "I share my soul through the songs that move me."
  },
  {
    id: "jinwook",
    name: "Jinwook",
    profileImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    description: "Jinwook's playlists often showcase his appreciation for intricate melodies and thoughtful lyrics.",
    quote: "Music is the universal language that connects us all."
  },
  {
    id: "thai",
    name: "Thai",
    profileImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "Thai creates vibrant playlists that reflect his energetic personality and diverse cultural influences.",
    quote: "Find your rhythm, find yourself."
  },
  {
    id: "nex",
    name: "Nex",
    profileImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
    description: "Nex's innovative approach to music curation sets his playlists apart with unexpected combinations.",
    quote: "Breaking boundaries through sound."
  },
  {
    id: "phutatchai",
    name: "Phutatchai",
    profileImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Phutatchai's playlists often feature emotionally resonant songs that tell powerful stories.",
    quote: "The right song at the right moment can change everything."
  },
  {
    id: "copper",
    name: "Copper",
    profileImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "Copper's musical selections showcase his deep appreciation for artistry and craftsmanship in music.",
    quote: "Quality over quantity, always."
  },
  {
    id: "aa",
    name: "Aa",
    profileImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "Aa creates mood-enhancing playlists perfect for any occasion or emotional state.",
    quote: "There's a playlist for every feeling."
  },
  {
    id: "jungt",
    name: "Jungt",
    profileImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Jungt's playlists are carefully crafted journeys through sound and emotion.",
    quote: "Music is the soundtrack to our moments."
  },
  {
    id: "peemwasu",
    name: "Peemwasu",
    profileImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "Peemwasu shares playlists that inspire creativity and positive energy.",
    quote: "Because of you I shine - through music we connect."
  }
];

export function getArtistById(id: string): Artist | undefined {
  return artists.find(artist => artist.id === id);
}
