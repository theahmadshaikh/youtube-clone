import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_BASE_URL } from "../utils/constants";
import type { YouTubeVideo } from "../types/youtube";

const VideoContainer: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async (pageToken = "") => {
    try {
      setLoading(true);
      const response = await fetch(
        `${YOUTUBE_API_BASE_URL}&maxResults=20&pageToken=${pageToken}`
      );
      const data = await response.json();
      setVideos((prev) => [...prev, ...data.items]);
      setNextPageToken(data.nextPageToken || null);
    } catch (err) {
      console.error("Failed to fetch videos", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 200;

      if (nearBottom && !loading && nextPageToken) {
        fetchVideos(nextPageToken);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken, loading]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {loading && (
        <div className="col-span-full text-center text-gray-500">Loading more...</div>
      )}
    </section>
  );
};

export default VideoContainer;
