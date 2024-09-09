export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface IComment {
  id: number;
  likes: number;
  title: string;
  userName: string;
  userId: string;
  userAvatar: string;
}

export interface IPost {
  id: string;
  userName: string;
  userId: string;
  userAvatar: string;
  title?: string;
  image?: string;
  likes: number;
  liked: boolean;
  comments: IComment[];
}