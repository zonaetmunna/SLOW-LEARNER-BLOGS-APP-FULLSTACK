"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ToasterProvider } from "@/providers/toaster-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  FiBell,
  FiEye,
  FiHelpCircle,
  FiInfo,
  FiLock,
  FiMail,
  FiMessageSquare,
  FiSettings,
  FiTag,
  FiUser,
} from "react-icons/fi";

// Define types for sections and links
type SettingsLink = {
  href: string;
  label: string;
  icon: IconType;
  external?: boolean;
};

type SettingsSection = {
  title: string;
  links: SettingsLink[];
};

// Navigation sections configuration
const settingsSections: SettingsSection[] = [
  {
    title: "", // No title for main section
    links: [
      {
        href: "/dashboard/settings/profile",
        label: "Profile details",
        icon: FiUser,
      },
      {
        href: "/dashboard/settings/account",
        label: "Account",
        icon: FiMail,
      },
      {
        href: "/dashboard/settings/appearance",
        label: "Appearance",
        icon: FiEye,
      },
      {
        href: "/dashboard/settings/notifications",
        label: "Notifications",
        icon: FiBell,
      },
    ],
  },
  {
    title: "Privacy & Security",
    links: [
      {
        href: "/dashboard/settings/privacy",
        label: "Privacy",
        icon: FiInfo,
      },
      {
        href: "/dashboard/settings/security",
        label: "Security",
        icon: FiLock,
      },
    ],
  },
  {
    title: "Feed Settings",
    links: [
      {
        href: "/dashboard/settings/feed",
        label: "Feed Preferences",
        icon: FiSettings,
      },
      {
        href: "/dashboard/settings/tags",
        label: "Tags",
        icon: FiTag,
      },
    ],
  },
  {
    title: "Help & Support",
    links: [
      {
        href: "/dashboard/settings/help",
        label: "Help Center",
        icon: FiHelpCircle,
      },
      {
        href: "/dashboard/settings/feedback",
        label: "Feedback",
        icon: FiMessageSquare,
      },
    ],
  },
];

// User profile component for top of sidebar
const UserProfile = () => {
  return (
    <div className="p-4 border-b border-border/50 mb-2">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-secondary overflow-hidden">
          <img
            src="/placeholder-avatar.jpg"
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">Slow Learner</p>
          <p className="text-xs text-muted-foreground truncate">
            @slow_learner
          </p>
        </div>
        <Link
          href="/dashboard/settings/profile"
          className="opacity-60 hover:opacity-100"
        >
          <span className="sr-only">Edit profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Individual link component
const NavLink = ({
  link,
  pathname,
}: {
  link: SettingsLink;
  pathname: string;
}) => {
  const isActive =
    pathname === link.href || pathname.startsWith(`${link.href}/`);
  const Icon = link.icon;

  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted/50 w-full",
        isActive
          ? "bg-muted/50 text-primary font-medium"
          : "text-muted-foreground"
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{link.label}</span>
      {link.external && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-auto"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      )}
    </Link>
  );
};

// Settings sidebar component
const SettingsSidebar = ({ pathname }: { pathname: string }) => {
  return (
    <div className="w-full h-full bg-card rounded-lg border border-border/50 overflow-hidden">
      <UserProfile />
      <div className="px-2 py-2">
        <nav className="space-y-6">
          {settingsSections.map((section, i) => (
            <div key={i} className="space-y-2">
              {section.title && (
                <h4 className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </h4>
              )}
              <div className="space-y-1">
                {section.links.map((link) => (
                  <NavLink key={link.href} link={link} pathname={pathname} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Client component wrapper
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <SettingsSidebar pathname={pathname} />
        </div>
        <div className="md:w-3/4">
          <Card>
            <CardContent className="p-6">{children}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <ToasterProvider>
      <ClientLayout>{children}</ClientLayout>
    </ToasterProvider>
  );
}
