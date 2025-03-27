import { WeeklyChart } from "../services/types";

export const WeeklyChartResponseProcessor = (weeklyChart: WeeklyChart) => {
  return weeklyChart.weeklyalbumchart.album.map((album) => {
    return {
      artistName: album.artist["#text"],
      albumName: album.name,
      playCount: album.playcount,
      albumUrl: album.url,
      rank: album["@attr"].rank,
    };
  });
};
