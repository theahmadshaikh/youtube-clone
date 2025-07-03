import { YOUTUBE_API_BASE_URL } from "../utils/constants";

export const fetchYoutubeVideos = async (pageToken = "") => {
  const response = await fetch(
    `${YOUTUBE_API_BASE_URL}&maxResults=20&pageToken=${pageToken}`
  );
  return await response.json();
};
