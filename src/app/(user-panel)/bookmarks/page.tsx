import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowUp,
  Bookmark,
  Link,
  MessageSquare,
  Search,
  Share2,
  ThumbsDown,
} from "lucide-react";

export default function BookmarksPage() {
  // Sample bookmark data
  const bookmarks = [
    {
      id: 1,
      title: "React Trends in 2024",
      author: {
        name: "rwieruch",
        avatar: "/api/placeholder/40/40",
      },
      date: "Feb 20, 2024",
      readTime: "9m read time",
      tags: ["#astro", "#authentication", "+1"],
      upvotes: 192,
      comments: 3,
      thumbnail: "/api/placeholder/240/140",
      thumbnailType: "logo",
    },
    {
      id: 2,
      title: "How to keep yourself unblocked?",
      author: {
        name: "Medium",
        avatar: "/api/placeholder/40/40",
      },
      date: "Nov 17, 2023",
      readTime: "3m read time",
      tags: ["#career", "#productivity"],
      upvotes: 6,
      comments: 0,
      thumbnail: "/api/placeholder/240/140",
      thumbnailType: "image",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4">
      <div className="max-w-screen-xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Bookmarks</h1>
          <Button className="bg-slate-800 hover:bg-slate-700 flex items-center gap-2 rounded-full px-4">
            <Share2 className="h-5 w-5" />
            <span>Share bookmarks</span>
          </Button>
        </header>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            placeholder="Search bookmarks"
            className="pl-10 bg-slate-900 border-slate-800 text-slate-200 h-12 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((bookmark) => (
            <BookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BookmarkCard({ bookmark }: { bookmark: any }) {
  return (
    <Card className="bg-slate-950 border border-slate-800 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Avatar className="h-8 w-8 rounded-full">
            <img src={bookmark.author.avatar} alt={bookmark.author.name} />
          </Avatar>
          <h3 className="text-lg font-semibold">{bookmark.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {bookmark.tags.map((tag: any, index: any) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-slate-400 mb-4">
          {bookmark.date} • {bookmark.readTime}
        </div>

        <div className="h-32 bg-white rounded-md overflow-hidden mb-2">
          {bookmark.thumbnailType === "logo" ? (
            <div className="h-full w-full flex items-center justify-center bg-white text-black p-4">
              <div className="text-2xl font-bold">
                <span className="text-gray-800">rw</span>
                <span className="text-purple-600">i</span>
                <span className="text-gray-800">eruch</span>
              </div>
            </div>
          ) : (
            <img
              src={bookmark.thumbnail}
              alt={bookmark.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </CardContent>

      <CardFooter className="px-4 py-2 border-t border-slate-800 flex">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-green-500 h-8 w-8"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <span className="text-green-500 font-medium">
              {bookmark.upvotes}
            </span>
          </div>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ThumbsDown className="h-5 w-5" />
          </Button>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MessageSquare className="h-5 w-5" />
            </Button>
            {bookmark.comments > 0 && (
              <span className="text-slate-400">{bookmark.comments}</span>
            )}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-orange-500"
          >
            <Bookmark className="h-5 w-5 fill-orange-500" />
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Link className="h-5 w-5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
