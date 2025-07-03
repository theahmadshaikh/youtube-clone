export interface YouTubeVideo {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      medium?: { url: string };
      high?: { url: string };
      maxres?: { url: string };
    };
  };
  statistics: {
    viewCount: string;
  };
}
