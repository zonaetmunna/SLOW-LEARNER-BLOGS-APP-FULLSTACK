"use client";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Star,
} from "lucide-react";
import * as React from "react";

import { MenuUser } from "@/components/layout/menu-user";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { MenuMain } from "./menu-main";
import { MenuProject } from "./menu-project";

// This is sample data.
const data = {
  user: {
    name: "Slow-learner",
    email: "slowpoke@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Discover",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Tags",
          url: "/dashboard/tags",
        },
        {
          title: "Sources",
          url: "/dashboard/sources",
        },
        {
          title: "Leaderboard",
          url: "/dashboard/leaderboard",
        },
        {
          title: "Discussions",
          url: "/dashboard/discussed",
        },
      ],
    },
    {
      title: "Bookmarks",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Bookmarks",
          url: "/dashboard/bookmarks",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Networks",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Find Squads",
          url: "/dashboard/squads/discover",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "My Feed",
      url: "/dashboard/my-feed",
      icon: Frame,
    },
    {
      name: "Following",
      url: "/dashboard/following",
      icon: PieChart,
    },
    {
      name: "Explore",
      url: "/dashboard/explore",
      icon: Map,
    },

    {
      name: "History",
      url: "/dashboard/history",
      icon: Star,
    },
  ],
};

export function AppSidebarUser({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <MenuProject projects={data.projects} />
        <MenuMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <MenuUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
