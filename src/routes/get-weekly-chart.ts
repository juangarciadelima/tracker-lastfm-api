import { Elysia, t } from "elysia";
import { LastFMResolver } from "../services/last-fm.service";
import { WeeklyChartResponseProcessor } from "../processors/weekly-chart-processor";

export const getWeeklyChart = new Elysia({
  tags: ["LastFM"],
  detail: {
    description: "Get LastFM WeeklyChart",
  },
}).post(
  "/weekly",
  async ({ body, set }) => {
    const { userName } = body;

    try {
      const weeklyChartData = await LastFMResolver.getWeeklyChart(userName);

      set.status = 200;

      const sanitizedWeeklyChartData =
        WeeklyChartResponseProcessor(weeklyChartData);

      return { weeklyChartData: sanitizedWeeklyChartData };
    } catch (error) {
      set.status = 500;

      return { error: error };
    }
  },
  {
    body: t.Object({
      userName: t.String(),
    }),
  }
);
