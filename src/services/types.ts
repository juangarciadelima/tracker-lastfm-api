type Album = {
  artist: {
    mbid: string;
    "#text": string;
  };
  mbid: string;
  url: string;
  "@attr": {
    rank: string;
  };
  name: string;
  playcount: string;
};

export type Image = {
  size: string;
  "#text": string;
};

type Tag = {
  url: string;
  name: string;
};

type Track = {
  streamable: {
    fulltrack: string;
    "#text": string;
  };
  duration: number;
  url: string;
  name: string;
  "@attr": {
    rank: string;
  };
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
};

export interface WeeklyChart {
  weeklyalbumchart: {
    album: Album[];
  };
}

export interface UserInfo {
  user: {
    name: string;
    age: string;
    subscriber: string;
    realname: string;
    bootstrap: string;
    playcount: string;
    artist_count: string;
    playlists: string;
    track_count: string;
    album_count: string;
    image: Image[];
    registered: {
      unixtime: string;
      "#text": string;
    };
    gender: string;
    country: string;
    url: string;
    type: string;
  };
}

export interface AlbumInfo {
  album: {
    artist: string;
    mbid: string;
    tags: Tag[];
    playcount: string;
    image: Image[];
    tracks: {
      track: Track[];
    };
    url: string;
    name: string;
    listeners: string;
    wiki: {
      published: string;
      summary: string;
    };
  };
}
