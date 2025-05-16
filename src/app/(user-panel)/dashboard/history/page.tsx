import BlogCard from "@/components/BlogCard";
import { historyBlogs } from "@/data/mockBlogs";

export default function HistoryPage() {
  return (
    <div>
      {" "}
      <div className="mb-8">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
            All Time
          </button>
          <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md text-sm font-medium">
            Today
          </button>
          <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md text-sm font-medium">
            Yesterday
          </button>
          <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md text-sm font-medium">
            This Week
          </button>
          <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md text-sm font-medium">
            This Month
          </button>
        </div>
      </div>
      <div className="space-y-12">
        {/* Day Section - Yesterday */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Yesterday</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historyBlogs.slice(0, 3).map((blog) => (
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

        {/* Day Section - Older */}
        <div>
          <h2 className="text-xl font-semibold mb-4">May 15</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyBlogs.slice(3, 6).map((blog) => (
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
      </div>
    </div>
  );
}
