// src/components/VideoContainer.tsx
import React from "react";
import VideoCard from "./VideoCard";
import { useVideoFeed } from "../hooks/useVideoFeed";
import { useVideoStore } from "../stores/useVideoStore";

const VideoContainer: React.FC = () => {
  useVideoFeed();
  const { videos, loading } = useVideoStore();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {loading && (
        <div className="col-span-full text-center text-gray-500">Loading...</div>
      )}
    </section>
  );
};

export default VideoContainer;
