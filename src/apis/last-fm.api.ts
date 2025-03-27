import axios from "axios";

export const lastFMApi = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0/",
  params: {
    api_key: process.env.LASTFM_API_KEY,
    format: "json",
  },
});
