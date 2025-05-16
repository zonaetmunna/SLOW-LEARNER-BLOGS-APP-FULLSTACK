import BlogCard from "@/components/BlogCard";
import { followingBlogs } from "@/data/mockBlogs";

export default function FollowingPage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {followingBlogs.map((blog) => (
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
