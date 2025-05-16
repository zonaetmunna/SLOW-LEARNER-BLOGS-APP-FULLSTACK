"use client";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, X } from "lucide-react";
import { useState } from "react";

// Define types for our notifications
type NotificationType = "post" | "mention" | "reply";

interface NotificationProps {
  id: string;
  type: NotificationType;
  username: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  category?: string;
  thumbnail?: string;
  title?: string;
}

// Sample notification data
const sampleNotifications: NotificationProps[] = [
  {
    id: "1",
    type: "post",
    username: "Flintil",
    userAvatar: "/api/placeholder/40/40",
    content: "shared a new post on Game Developers",
    timestamp: "3h ago",
    category: "Game Developers",
    thumbnail: "/api/placeholder/80/80",
    title: "(How To Succeed) At Indie Game Development",
  },
  {
    id: "2",
    type: "post",
    username: "Flintil",
    userAvatar: "/api/placeholder/40/40",
    content: "shared a new post on Game Developers",
    timestamp: "5h ago",
    category: "Game Developers",
    thumbnail: "/api/placeholder/80/80",
    title: "Everything You Need To Start Making Games (As A Beginner)",
  },
  {
    id: "3",
    type: "post",
    username: "Hamed Bahram",
    userAvatar: "/api/placeholder/40/40",
    content: "New post from Hamed Bahram, check it out now!",
    timestamp: "1d ago",
    thumbnail: "/api/placeholder/80/80",
    title: "Add custom pages to Clerk's UserProfile component",
  },
];

// Push notification banner component
const PushNotificationBanner = ({
  onClose,
  onEnable,
}: {
  onClose: () => void;
  onEnable: () => void;
}) => {
  return (
    <div className="bg-zinc-900 border-l-4 border-purple-600 p-4 relative mb-6">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        <X size={20} />
      </button>
      <h2 className="text-white text-lg font-bold mb-2">Push notifications</h2>
      <p className="text-gray-300 mb-4">
        Stay in the loop whenever you get a mention, reply and other{" "}
        <span className="text-purple-400">important updates</span>.
      </p>
      <Button
        onClick={onEnable}
        className="bg-purple-600 hover:bg-purple-700 text-white rounded-md"
      >
        Enable notifications
      </Button>
    </div>
  );
};

// Notification card component
const NotificationCard = ({
  notification,
}: {
  notification: NotificationProps;
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-purple-500">
          <Bell size={16} />
        </div>
        <Avatar className="h-8 w-8 rounded-full bg-zinc-700">
          <img
            src={notification.userAvatar}
            alt={notification.username}
            className="rounded-full"
          />
        </Avatar>
        {notification.username !== "Hamed Bahram" && (
          <Avatar className="h-6 w-6 -ml-4 rounded-full bg-zinc-700 border border-zinc-900">
            <img
              src="/api/placeholder/24/24"
              alt="Category"
              className="rounded-full"
            />
          </Avatar>
        )}
        <div className="text-white">
          <span className="font-bold">{notification.username}</span>{" "}
          {notification.content}
        </div>
      </div>
      <Card className="bg-zinc-800 border-zinc-700 rounded-md overflow-hidden ml-8 mb-4">
        <div className="flex items-center p-4">
          {notification.thumbnail && (
            <div className="mr-4 w-20 h-16 relative overflow-hidden rounded-md">
              <img
                src={notification.thumbnail}
                alt={notification.title || "Thumbnail"}
                className="w-full h-full object-cover"
              />
              {notification.username === "Hamed Bahram" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="text-white">{notification.title}</div>
        </div>
      </Card>
    </div>
  );
};

export default function NotificationsPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 max-w-md mx-auto">
      {showBanner && (
        <PushNotificationBanner
          onClose={() => setShowBanner(false)}
          onEnable={() => {
            alert("Notifications enabled!");
            setShowBanner(false);
          }}
        />
      )}

      <h1 className="text-xl font-bold mb-6">Notifications</h1>

      <div>
        {sampleNotifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}
