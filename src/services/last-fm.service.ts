import { lastFMApi } from "../apis/last-fm.api";
import { LastFMMethods } from "../constants/last-fm-methods.enum";
import { AlbumInfo, UserInfo, WeeklyChart } from "./types";

class LastFMService {
  async getWeeklyChart(userName: string): Promise<WeeklyChart> {
    const response = await lastFMApi.get("", {
      params: {
        user: userName,
        method: LastFMMethods.GET_WEEKLY_CHART,
      },
    });

    return response.data as WeeklyChart;
  }

  async getUserInfo(userName: string): Promise<UserInfo> {
    const response = await lastFMApi.get("", {
      params: {
        user: userName,
        method: LastFMMethods.GET_USER_INFO,
      },
    });

    return response.data as UserInfo;
  }

  async getAlbumInfo(
    artistName: string,
    albumName: string
  ): Promise<AlbumInfo> {
    const response = await lastFMApi.get("", {
      params: {
        method: LastFMMethods.GET_ALBUM_INFO,
        artist: artistName,
        album: albumName,
      },
    });

    return response.data as AlbumInfo;
  }
}

const LastFMResolver = new LastFMService();

export { LastFMResolver };
