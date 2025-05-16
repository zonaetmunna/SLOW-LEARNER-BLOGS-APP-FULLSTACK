import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { myFeedBlogs } from "@/data/mockBlogs";

export default function MyFeedPage() {
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 bg-muted px-3 py-2 rounded-lg text-sm font-medium"
      >
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
          className="mr-1"
        >
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-6" />
        </svg>
        Feed Settings
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {myFeedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            tags={blog.tags}
            author={blog.author}
            publishedDate={blog.publishedDate}
            readTime={blog.readTime}
            image={blog.image}
            likes={blog.likes}
            comments={blog.comments}
            bookmarks={blog.bookmarks}
          />
        ))}
      </div>
    </div>
  );
}
