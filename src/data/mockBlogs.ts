export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  tags: string[];
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  image?: string;
  likes: number;
  comments: number;
  bookmarks: number;
}

export const mockBlogs: BlogPost[] = [
  {
    id: "1",
    title: "(How To Succeed) At Indie Game Development",
    excerpt:
      "Learn the essential strategies and pitfalls to avoid when developing indie games. This guide covers everything from planning to execution.",
    tags: ["gamedev", "indie"],
    author: {
      id: "author1",
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "5 min",
    image: "https://placehold.co/600x400/png?text=Game+Development",
    likes: 24,
    comments: 5,
    bookmarks: 12,
  },
  {
    id: "2",
    title: "Everything You Need To Start Making Games (As A Beginner)",
    excerpt:
      "A comprehensive guide for beginners looking to enter the world of game development. Includes tool recommendations and first steps.",
    tags: ["beginner", "gamedev"],
    author: {
      id: "author2",
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "7 min",
    image: "https://placehold.co/600x400/png?text=Game+Making",
    likes: 31,
    comments: 8,
    bookmarks: 15,
  },
  {
    id: "3",
    title:
      "How to format dates in JavaScript: Methods, libraries, and best practices",
    excerpt:
      "Learn the right way to format and work with dates in JavaScript, including popular libraries and performance considerations.",
    tags: ["webdev", "javascript"],
    author: {
      id: "author3",
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "11 min",
    image: "https://placehold.co/600x400/png?text=JavaScript",
    likes: 45,
    comments: 12,
    bookmarks: 20,
  },
  {
    id: "4",
    title: "Local PostgreSQL development, Demo support and Integration testing",
    excerpt:
      "Setting up PostgreSQL for local development and creating effective integration tests for your projects.",
    tags: ["postgresql", "xcode"],
    author: {
      id: "author4",
      name: "Sam Wilson",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "3 min",
    image: "https://placehold.co/600x400/png?text=PostgreSQL",
    likes: 18,
    comments: 3,
    bookmarks: 9,
  },
  {
    id: "5",
    title:
      "Prompt Engineering with Apache Kafka - Real-Time Data You Can Prompt Engineer",
    excerpt:
      "Learn how to leverage Apache Kafka for real-time data processing in prompt engineering workflows.",
    tags: ["open-source"],
    author: {
      id: "author5",
      name: "Emily Chen",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "10 min",
    image: "https://placehold.co/600x400/png?text=Apache+Kafka",
    likes: 37,
    comments: 6,
    bookmarks: 18,
  },
  {
    id: "6",
    title: "Docker at Microsoft Build 2025",
    excerpt:
      "Overview of the latest Docker announcements and features showcased at Microsoft Build 2025.",
    tags: ["ai", "security", "cloud"],
    author: {
      id: "author6",
      name: "Michael Brown",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "3 min",
    image: "https://placehold.co/600x400/png?text=Docker",
    likes: 28,
    comments: 7,
    bookmarks: 14,
  },
  {
    id: "7",
    title:
      "We built useSharedState for React, because real-time features needed server state",
    excerpt:
      "Introducing useSharedState, a React hook for managing real-time server state updates in your applications.",
    tags: ["react", "open-source"],
    author: {
      id: "author7",
      name: "Sarah Davis",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "2 min",
    image: "https://placehold.co/600x400/png?text=React",
    likes: 42,
    comments: 11,
    bookmarks: 23,
  },
  {
    id: "8",
    title:
      "Is Windsurf shifting its focus? From students & hobbyists to pro software engineers",
    excerpt:
      "Analyzing the recent changes in Windsurf's positioning and target audience in the development tools market.",
    tags: ["ai", "enterprise"],
    author: {
      id: "author8",
      name: "David Lee",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    publishedDate: "Yesterday",
    readTime: "5 min",
    image: "https://placehold.co/600x400/png?text=Windsurf",
    likes: 19,
    comments: 4,
    bookmarks: 8,
  },
  {
    id: "9",
    title: "AI Agents Built for Data Workflows",
    excerpt:
      "Discover how AI agents are revolutionizing data processing workflows and increasing productivity.",
    tags: ["ai", "cloud", "python", "sql"],
    author: {
      id: "author9",
      name: "Rachel Green",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    publishedDate: "May 15",
    readTime: "3 min",
    image: "https://placehold.co/600x400/png?text=AI+Agents",
    likes: 33,
    comments: 9,
    bookmarks: 16,
  },
  {
    id: "10",
    title:
      "Is the Monolithic Backend Dead? How Frontend-First Development Is Hijacking Our Industry",
    excerpt:
      "A critical analysis of the shift towards frontend-first development and its impact on backend architecture.",
    tags: ["backend", "architecture", "frontend"],
    author: {
      id: "author10",
      name: "Thomas Miller",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    publishedDate: "May 15",
    readTime: "4 min",
    image: "https://placehold.co/600x400/png?text=Monolithic+Backend",
    likes: 27,
    comments: 13,
    bookmarks: 11,
  },
];

export const followingBlogs = mockBlogs.slice(0, 5);
export const exploreBlogs = mockBlogs.slice(3, 8);
export const myFeedBlogs = mockBlogs.slice(1, 7);
export const historyBlogs = mockBlogs.slice(2, 9);
