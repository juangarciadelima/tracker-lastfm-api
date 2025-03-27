import { AlbumInfo, Image } from "../services/types";

export const AlbumInfoResponseProcessor = (albumInfo: AlbumInfo) => {
  const getExtraLargeImage = (images: Image[]) => {
    return images.find((image) => image.size === "extralarge")?.["#text"];
  };

  const { album } = albumInfo;
  return {
    albumName: album.name,
    playCount: album.playcount,
    artistName: album.artist,
    lastFMAlbumUrl: album.url,
    albumCapeUrl: getExtraLargeImage(album.image),
  };
};
