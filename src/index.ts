import { Elysia } from "elysia";
import { getWeeklyChart } from "./routes/get-weekly-chart";
import { getUserInfo } from "./routes/get-user-info";
import { getAlbumInfo } from "./routes/get-album-info";

new Elysia()
  .get("/", () => "Hello Elysia")
  .use(getWeeklyChart)
  .use(getUserInfo)
  .use(getAlbumInfo)
  .listen(3000);
