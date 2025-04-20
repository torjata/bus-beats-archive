
export interface Playlist {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  platform: "apple" | "spotify";
  externalUrl: string;
  artistId: string;
  date: string;
  embedCode?: string; // Added for embedded players
}

export const playlists: Playlist[] = [
  {
    id: "alan-favorites-2025",
    title: "Alan's Favorites 2025",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "A collection of songs that have been on repeat for me this year.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "alan",
    date: "2025-04-15",
    embedCode: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0vvwas?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: "marckris-workout",
    title: "Marckris Workout Mix",
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "High-energy tracks to push through your toughest workouts.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "marckris",
    date: "2025-04-10",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb"></iframe>'
  },
  {
    id: "khunpol-chill",
    title: "Khunpol's Chill Zone",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
    description: "Relaxing tracks for winding down after a long day.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "khunpol",
    date: "2025-04-05",
    embedCode: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: "heart-ballads",
    title: "Heart's Ballad Collection",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "Emotional ballads that touch the soul and warm the heart.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "heart",
    date: "2025-03-28",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/todays-chill/pl.b2bdc2d143aa47c5884c05c98f3980b4"></iframe>'
  },
  {
    id: "jinwook-inspirations",
    title: "Jinwook's Inspirations",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Songs that inspire creativity and positive energy.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "jinwook",
    date: "2025-03-20",
    embedCode: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcZDD7cfEKhW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: "thai-favorites",
    title: "Thai's Global Hits",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "A diverse collection of hits from around the world.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "thai",
    date: "2025-03-15",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/a-list-pop/pl.5ee8333dbe944d9f9151e97d92d1ead9"></iframe>'
  },
  {
    id: "nex-electronic",
    title: "Nex Electronic Journey",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    description: "An exploration of electronic music from ambient to dance.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "nex",
    date: "2025-03-10",
    embedCode: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: "phutatchai-acoustic",
    title: "Phutatchai's Acoustic Sessions",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Stripped-down acoustic versions showcasing raw talent.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "phutatchai",
    date: "2025-03-05",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/acoustic-chill/pl.7fc27da2e2df4acfac3da430a109b752"></iframe>'
  },
  {
    id: "copper-classics",
    title: "Copper's Timeless Classics",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
    description: "Songs that stand the test of time across decades.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "copper",
    date: "2025-02-28",
    embedCode: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: "aa-party",
    title: "Aa's Party Mix 2025",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    description: "Upbeat tracks guaranteed to keep the party going.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "aa",
    date: "2025-02-20",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/dancexyzy/pl.6bf4415b83ce4f3789614ac4c3675740"></iframe>'
  },
  {
    id: "jungt-mood",
    title: "Jungt's Mood Enhancers",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60",
    description: "Songs carefully selected to boost your mood and energy.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "jungt",
    date: "2025-02-15",
    embedCode: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: "peemwasu-relaxing",
    title: "Peemwasu's Evening Relaxation",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "The perfect soundtrack for winding down in the evening.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "peemwasu",
    date: "2025-02-10",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/sleep/pl.f6442de2a9d3493a9e1f54f75eca13b4"></iframe>'
  },
  // Additional playlists
  {
    id: "alan-throwbacks",
    title: "Alan's 2010s Throwbacks",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    description: "A nostalgic journey back to the hits of the 2010s.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "alan",
    date: "2025-02-05",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/2010s-hits-essentials/pl.ade6e539c7e74757a7a1ce2dbf24cb7b"></iframe>'
  },
  {
    id: "heart-dance",
    title: "Heart's Dance Inspirations",
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    description: "Songs that get me moving and inspire my choreography.",
    platform: "spotify",
    externalUrl: "https://open.spotify.com",
    artistId: "heart",
    date: "2025-01-30",
    embedCode: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0HRj9P7NxeE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: "nex-contemporary",
    title: "Nex's Contemporary Sounds",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60",
    description: "Forward-thinking tracks that push musical boundaries.",
    platform: "apple",
    externalUrl: "https://music.apple.com",
    artistId: "nex",
    date: "2025-01-25",
    embedCode: '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/todays-indie-rock/pl.9c4e6941df3045e0b43ca0bc87ad265d"></iframe>'
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
