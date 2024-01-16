export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
  }[];
}

export interface CardItemStuctureProps {
  comment: Comment;
  key: number;
  isReplyMode: boolean;
  handleReplyClick: () => void;
}

export interface InheritanceReplyCardProps {
  replyItem: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
  };
  key: number;
  isReplyMode: boolean;
  handleReplyClick: () => void;
}
