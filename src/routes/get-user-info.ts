import { Elysia, t } from "elysia";
import { LastFMResolver } from "../services/last-fm.service";
import { UserInfoResponseProcessor } from "../processors/user-info-processor";

export const getUserInfo = new Elysia({
  tags: ["LastFM"],
  detail: {
    description: "Get LastFM WeeklyChart",
  },
}).post(
  "/user-info",
  async ({ body, set }) => {
    const { userName } = body;

    try {
      const userInfoData = await LastFMResolver.getUserInfo(userName);

      set.status = 200;

      const sanitizedUserInfoData = UserInfoResponseProcessor(userInfoData);

      return { userInfo: sanitizedUserInfoData };
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
