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
