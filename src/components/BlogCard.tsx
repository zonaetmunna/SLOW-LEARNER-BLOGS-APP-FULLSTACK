import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  tags?: string[];
  excerpt?: string;
  readTime?: string;
  publishedDate?: string;
  likes?: number;
  comments?: number;
  bookmarks?: number;
  author?: {
    name: string;
    avatar?: string;
  };
  image?: string;
  variant?: "default" | "compact";
}

const BlogCard = ({
  id,
  title,
  tags = [],
  excerpt,
  readTime,
  publishedDate,
  likes = 0,
  comments = 0,
  bookmarks = 0,
  author,
  image,
  variant = "default",
}: BlogCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow dark:bg-zinc-800/50">
      {/* Author info and date */}
      <div className="p-4 pb-0 flex items-center justify-between">
        {author && (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar || ""} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
        )}
        {publishedDate && (
          <span className="text-xs text-muted-foreground">{publishedDate}</span>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-4 flex-1">
        <Link href={`/dashboard/blog/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
          {excerpt && variant === "default" && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {excerpt}
            </p>
          )}
        </Link>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted/50"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Featured Image */}
        {image && (
          <div className="relative w-full h-40 mt-2 rounded-md overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
      </CardContent>

      {/* Footer with interaction buttons */}
      <CardFooter className="px-4 py-3 border-t flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-muted-foreground hover:text-primary">
            <span className="sr-only">Like</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <span className="text-xs">{likes}</span>
          </button>

          <button className="flex items-center text-muted-foreground hover:text-primary">
            <span className="sr-only">Comment</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-xs">{comments}</span>
          </button>

          <button className="flex items-center text-muted-foreground hover:text-primary">
            <span className="sr-only">Bookmark</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
            <span className="text-xs">{bookmarks}</span>
          </button>
        </div>

        {readTime && (
          <span className="text-xs text-muted-foreground">
            {readTime} read time
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
