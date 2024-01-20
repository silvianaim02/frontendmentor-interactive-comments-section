export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface ItemField {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: ItemField[];
}

export interface CardItemStuctureProps {
  comment: Comment;
  key: number;
  idReply: string;
  isReplyMode: boolean;
  handleReplyClick: (id: string) => void;
  onAddReply?: (parentId: number, newReply: ItemField) => void;
}

export interface InheritanceReplyCardProps {
  replyItem: ItemField;
  key: number;
  isReplyMode: boolean;
}
