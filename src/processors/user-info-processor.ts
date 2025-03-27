import { Image, UserInfo } from "../services/types";

export const UserInfoResponseProcessor = (userInfo: UserInfo) => {
  const getExtraLargeImage = (images: Image[]) => {
    return images.find((image) => image.size === "extralarge")?.["#text"];
  };
  return {
    name: userInfo.user.name,
    age: userInfo.user.age,
    playCount: userInfo.user.playcount,
    birthCountry: userInfo.user.country,
    url: userInfo.user.url,
    imageUrl: getExtraLargeImage(userInfo.user.image),
    realName: userInfo.user.realname,
  };
};
