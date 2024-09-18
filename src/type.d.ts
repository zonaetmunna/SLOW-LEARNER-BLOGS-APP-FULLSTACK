export interface IUser {
	id?: string;
	username: string;
	email: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
	posts?: IPost[];
	comments?: Comment[];
	likes?: Like[];
}

interface IPost {
	id?: string;
	title: string;
	content: string;
	published?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
	author?: IUser;
	authorId?: string;
	comments?: Comment[];
	likes?: Like[];
	likeCount?: number;
}
