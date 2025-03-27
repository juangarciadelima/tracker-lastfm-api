import { Elysia, t } from "elysia";
import { LastFMResolver } from "../services/last-fm.service";
import { AlbumInfoResponseProcessor } from "../processors/album-info-processor";

export const getAlbumInfo = new Elysia({
  tags: ["LastFM"],
  detail: {
    description: "Get LastFM WeeklyChart",
  },
}).post(
  "/album-info",
  async ({ body, set }) => {
    const { artistName, albumName } = body;

    try {
      const albumInfoData = await LastFMResolver.getAlbumInfo(
        artistName,
        albumName
      );

      set.status = 200;

      const sanitizedAlbumInfoData = AlbumInfoResponseProcessor(albumInfoData);

      return { albumInfo: sanitizedAlbumInfoData };
    } catch (error) {
      console.log(error);
      set.status = 500;

      return { error: error };
    }
  },
  {
    body: t.Object({
      artistName: t.String(),
      albumName: t.String(),
    }),
  }
);
