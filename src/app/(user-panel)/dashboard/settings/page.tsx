"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  FiBell,
  FiBookOpen,
  FiEye,
  FiHelpCircle,
  FiInfo,
  FiLock,
  FiMessageSquare,
  FiTag,
  FiUser,
} from "react-icons/fi";

// Define the types for the settings cards
type SettingsCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const SettingsCard = ({
  title,
  description,
  href,
  icon,
}: SettingsCardProps) => (
  <Card className="h-full transition-all hover:shadow-md">
    <CardHeader className="space-y-1">
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
          {icon}
        </div>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-sm text-muted-foreground">
        Manage your {title.toLowerCase()} preferences and settings
      </div>
    </CardContent>
    <CardFooter>
      <Link href={href} className="w-full">
        <Button variant="outline" className="w-full">
          Manage {title}
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export default function SettingsPage() {
  const settingsCards: SettingsCardProps[] = [
    {
      title: "Profile",
      description: "Edit your personal information and public profile",
      href: "/dashboard/settings/profile",
      icon: <FiUser className="h-5 w-5" />,
    },
    {
      title: "Security",
      description: "Manage your password and authentication settings",
      href: "/dashboard/settings/security",
      icon: <FiLock className="h-5 w-5" />,
    },
    {
      title: "Appearance",
      description: "Customize how the application looks and feels",
      href: "/dashboard/settings/appearance",
      icon: <FiEye className="h-5 w-5" />,
    },
    {
      title: "Notifications",
      description: "Control your notification preferences",
      href: "/dashboard/settings/notifications",
      icon: <FiBell className="h-5 w-5" />,
    },
    {
      title: "Privacy",
      description: "Manage your privacy and data preferences",
      href: "/dashboard/settings/privacy",
      icon: <FiInfo className="h-5 w-5" />,
    },
    {
      title: "Tags",
      description: "Manage your tag preferences and interests",
      href: "/dashboard/settings/tags",
      icon: <FiTag className="h-5 w-5" />,
    },
    {
      title: "Feed",
      description: "Customize your content feed preferences",
      href: "/dashboard/settings/feed",
      icon: <FiBookOpen className="h-5 w-5" />,
    },
    {
      title: "Help",
      description: "Get help and support for your account",
      href: "/dashboard/settings/help",
      icon: <FiHelpCircle className="h-5 w-5" />,
    },
    {
      title: "Feedback",
      description: "Share your thoughts and suggestions",
      href: "/dashboard/settings/feedback",
      icon: <FiMessageSquare className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      <Separator />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {settingsCards.map((card, index) => (
          <SettingsCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
