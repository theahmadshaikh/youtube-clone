import type { YouTubeVideo } from "../types/youtube";

interface VideoCardProps {
  video: YouTubeVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { snippet, statistics } = video;
const thumbnail =
  video.snippet.thumbnails.maxres?.url ||
  video.snippet.thumbnails.high?.url ||
  video.snippet.thumbnails.medium?.url;
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm cursor-pointer transition hover:shadow-lg">
      <img
        src={thumbnail}
        alt={snippet.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
          {snippet.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{snippet.channelTitle}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {Number(statistics.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
