import { create } from "zustand";
import type { YouTubeVideo } from "../types/youtube";

// 1. Define store interface
interface VideoStore {
  videos: YouTubeVideo[];
  filter: string;
  loading: boolean;
  hasMore: boolean;
  nextPageToken: string | null;
  setFilter: (filter: string) => void;
  setVideos: (videos: YouTubeVideo[]) => void;
  addVideos: (videos: YouTubeVideo[], token: string | null,hasMore:boolean) => void;
  setLoading: (loading: boolean) => void;
}

// 2. Create store
export const useVideoStore = create<VideoStore>((set) => ({
  videos: [],
  filter: "All",
  loading: false,
  nextPageToken:"",
  hasMore: false,

  setFilter: (filter) => set({ filter }),
  setVideos: (videos) => set({ videos }),
 addVideos: (v, token, hasMore) =>
  set((s) => ({
    videos: [...s.videos, ...v],
    nextPageToken: token,
    hasMore,
  })),
  setLoading: (loading) => set({ loading }),
}));
