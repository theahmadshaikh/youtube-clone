// src/hooks/useVideoFeed.ts
import { useEffect, useRef } from "react";
import { fetchYoutubeVideos } from "../api/youtube";
import { useVideoStore } from "../stores/useVideoStore";

const STALE_DURATION_MS = 10 * 60 * 1000; // 10 minutes

export function useVideoFeed() {
  const {
    videos,
    nextPageToken,
    loading,
    addVideos,
    setLoading,
    setVideos,
    hasMore
  } = useVideoStore();
  const lastFetchedRef = useRef<number | null>(null);
  // Initial load
  useEffect(() => {
    const now = Date.now();
    const isStale =
      !lastFetchedRef.current ||
      now - lastFetchedRef.current > STALE_DURATION_MS;

    if (videos.length === 0 || isStale) {
      loadVideos();
      lastFetchedRef.current = now;
    }
  }, []);

  // Scroll logic
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        loadVideos(nextPageToken ?? undefined);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [nextPageToken, loading]);

  const loadVideos = async (pageToken = "") => {
    try {
      setLoading(true);
      const data = await fetchYoutubeVideos(pageToken);

      const newVideos = data.items;
      const newToken = data.nextPageToken ?? undefined;
      const more = !!data.nextPageToken;

      if (pageToken) {
        addVideos(newVideos, newToken, more);
      } else {
        // clear existing and load new
        setVideos([]);
        addVideos(newVideos, newToken, more); // ✅ this sets token + hasMore
      }
    } catch (err) {
      console.error("Failed to load videos", err);
    } finally {
      setLoading(false);
    }
  };

}
