import BlogCard from "@/components/BlogCard";
import { exploreBlogs } from "@/data/mockBlogs";

export default function ExplorePage() {
  return (
    <div>
      {/* Popular Tags Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "javascript",
            "webdev",
            "react",
            "python",
            "ai",
            "devops",
            "cloud",
            "gamedev",
            "beginners",
            "productivity",
          ].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exploreBlogs.map((blog) => (
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
