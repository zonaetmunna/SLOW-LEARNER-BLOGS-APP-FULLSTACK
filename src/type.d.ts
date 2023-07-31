export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  posts?: Post[];
  comments?: Comment[];
  likes?: Like[];
}

interface Post {
  id?: string;
  title: string;
  content: string;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  author?: User;
  authorId?: string;
  comments?: Comment[];
  likes?: Like[];
  likeCount?: number;
}
