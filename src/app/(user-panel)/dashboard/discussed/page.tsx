import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowDown,
  ArrowUp,
  Bell,
  MessageSquare,
  MoreVertical,
  Share,
} from "lucide-react";
import Image from "next/image";

export default function DiscussionPage() {
  // Sample data for comments
  const comments = [
    {
      id: 1,
      author: "Nathan Tarbert",
      username: "@nathan_tarbert",
      avatar: "/api/placeholder/48/48",
      verified: true,
      likes: 940,
      content:
        "super clean update tbh - always makes me think if tech moves this fast, what keeps you from sticking with old ways even when you know better",
      timeAgo: "29 minutes ago",
      isReply: false,
    },
    {
      id: 2,
      author: "Audrey Delgado",
      username: "@audreydev",
      avatar: "/api/placeholder/48/48",
      verified: true,
      likes: 1100,
      content: "@shads Thanks. I'll check it out.",
      timeAgo: "35 minutes ago",
      isReply: true,
      replyTo: "@shads",
    },
    {
      id: 3,
      author: "Hardik Gohil",
      username: "@hardikgohilhir",
      avatar: "/api/placeholder/48/48",
      verified: true,
      likes: 335,
      content:
        "Sounds like a powerful and flexible solution, especially for indie developers and small teams wanting a cost-effective alternative to AWS S3.\n\nYou should consider launching MinIO on Startups Lab to share it with a wider audience and connect with other founders. Would be great to see it there!\n\nCheck it out here: https://startupslab.site",
      timeAgo: "48 minutes ago",
      isReply: false,
    },
    {
      id: 4,
      author: "Fabien Fernandes Alves",
      username: "@shads",
      avatar: "/api/placeholder/48/48",
      verified: true,
      likes: 440,
      content:
        "Nice blog post. I you haven't, you should read their book: Building Large Scale Web Apps. Really interesting!",
      timeAgo: "48 minutes ago",
      isReply: false,
      upvotes: 1,
    },
  ];

  return (
    <div className="flex justify-center bg-slate-950  text-slate-200">
      <div className="w-full max-w-xl">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function CommentCard({ comment }: { comment: any }) {
  return (
    <Card className="mb-1 bg-slate-950 border-slate-800 shadow-none rounded-lg">
      <CardContent className="p-4">
        {comment.isReply && (
          <div className="mb-2 text-sm text-slate-400">
            Replied to {comment.replyTo}
          </div>
        )}
        {!comment.isReply && (
          <div className="mb-2 text-sm text-slate-400">Commented on</div>
        )}
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 rounded-full overflow-hidden">
            <Image
              width={48}
              height={48}
              src={comment.avatar}
              alt={comment.author}
            />
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-slate-500 text-sm">{comment.username}</span>
              {comment.verified && (
                <Badge
                  variant="secondary"
                  className="h-5 bg-violet-900 hover:bg-violet-900 px-1"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#8B5CF6"
                    />
                  </svg>
                </Badge>
              )}
              <span className="text-slate-500 text-sm">
                • {comment.timeAgo}
              </span>
            </div>
            {comment.verified && (
              <div className="flex items-center gap-1 mt-1">
                <Badge className="text-xs bg-violet-900 hover:bg-violet-900 border-none">
                  {comment.likes}
                </Badge>
              </div>
            )}
            <div className="mt-2 whitespace-pre-line">{comment.content}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0 px-4 pb-4 flex gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <ArrowUp className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <ArrowDown className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Share className="h-4 w-4" />
        </Button>
        <div className="ml-auto">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        {comment.upvotes && (
          <div className="ml-2 text-sm text-slate-400">
            {comment.upvotes} upvote
          </div>
        )}
      </CardFooter>
      <Separator className="bg-slate-800" />
    </Card>
  );
}
