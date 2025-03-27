import { Elysia } from "elysia";
import { getWeeklyChart } from "./routes/get-weekly-chart";
import { getUserInfo } from "./routes/get-user-info";

new Elysia()
  .get("/", () => "Hello Elysia")
  .use(getWeeklyChart)
  .use(getUserInfo)
  .listen(3000);
