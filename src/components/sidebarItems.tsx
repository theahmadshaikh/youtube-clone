// src/components/Sidebar/sidebarItems.ts
import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdExplore,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import type { ReactNode } from "react";

export interface SidebarSection {
  items: {
    label: string;
    icon: ReactNode;
    route?: string;
    active?: boolean;
  }[];
}

export const sidebarSections: SidebarSection[] = [
  {
    items: [
      { label: "Home", icon: <MdHome />, active: true },
      { label: "Shorts", icon: <MdOutlineOndemandVideo /> },
      { label: "Subscriptions", icon: <MdSubscriptions /> },
    ],
  },
  {
    items: [
      { label: "Library", icon: <MdVideoLibrary /> },
      { label: "History", icon: <MdHistory /> },
      { label: "Explore", icon: <MdExplore /> },
    ],
  },
];
