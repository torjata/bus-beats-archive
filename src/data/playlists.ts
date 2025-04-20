
export interface Playlist {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  platform: "apple" | "spotify";
  externalUrl: string;
  artistId: string;
  date: string;
}

export const playlists: Playlist[] = [
  {
    id: "bambam-summer-vibes",
    title: "Summer Vibes 2025",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "My favorite tracks to dance to this summer! Perfect for parties and road trips.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "bambam",
    date: "2025-04-15"
  },
  {
    id: "ten-dance-practice",
    title: "Dance Practice Essentials",
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "Songs that help me push my limits during dance practice sessions.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "ten",
    date: "2025-04-10"
  },
  {
    id: "lisa-hip-hop-collection",
    title: "Hip-Hop Collection Vol.3",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
    description: "The latest hip-hop tracks that have been inspiring my choreography.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "lisa",
    date: "2025-04-05"
  },
  {
    id: "jackson-workout",
    title: "Workout Motivation",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "High-energy songs to push you through your toughest workouts.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "jackson",
    date: "2025-03-28"
  },
  {
    id: "minnie-vocal-inspirations",
    title: "Vocal Inspirations",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Artists and songs that inspire my vocal technique and style.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "minnie",
    date: "2025-03-20"
  },
  {
    id: "nichkhun-thai-favorites",
    title: "Thai Favorites",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "My collection of favorite Thai songs both classic and contemporary.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "nichkhun",
    date: "2025-03-15"
  },
  {
    id: "jae-rock-essentials",
    title: "Rock Essentials",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    description: "From classic rock to modern alternative - songs that define the genre for me.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "jae",
    date: "2025-03-10"
  },
  {
    id: "sorn-acoustic-sessions",
    title: "Acoustic Sessions",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Stripped down versions and acoustic performances that showcase pure vocal talent.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "sorn",
    date: "2025-03-05"
  },
  {
    id: "mark-underground-rap",
    title: "Underground Rap Discoveries",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
    description: "Lesser-known rap artists and tracks that deserve more recognition.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "mark",
    date: "2025-02-28"
  },
  {
    id: "tiffany-pop-anthems",
    title: "Pop Anthems 2025",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "The biggest pop hits and emerging anthems of the year so far.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "tiffany",
    date: "2025-02-20"
  },
  {
    id: "bamjackson-collab",
    title: "BamJackson Party Mix",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Our ultimate party playlist - guaranteed to keep everyone dancing!",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "bamjackson",
    date: "2025-02-15"
  },
  {
    id: "nichachu-chill",
    title: "Evening Chill",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "Relaxing tracks to unwind after a long day.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "nichachu",
    date: "2025-02-10"
  },
  // Additional playlists for more content
  {
    id: "bambam-throwbacks",
    title: "2010s Throwbacks",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    description: "Nostalgic hits from the previous decade that still get me energized.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "bambam",
    date: "2025-02-05"
  },
  {
    id: "lisa-dance-covers",
    title: "Dance Cover Inspirations",
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "Songs I've chosen for my dance covers - a mix of challenging and expressive tracks.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "lisa", 
    date: "2025-01-30"
  },
  {
    id: "ten-contemporary",
    title: "Contemporary Dance",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Emotional and flowing tracks perfect for contemporary dance practice.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "ten",
    date: "2025-01-25"
  }
];

export function getPlaylistById(id: string): Playlist | undefined {
  return playlists.find(playlist => playlist.id === id);
}

export function getPlaylistsByArtistId(artistId: string): Playlist[] {
  return playlists.filter(playlist => playlist.artistId === artistId);
}

export function getPlaylistCount(artistId: string): number {
  return playlists.filter(playlist => playlist.artistId === artistId).length;
}
