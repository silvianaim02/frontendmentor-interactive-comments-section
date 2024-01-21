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

export interface ReplyField {
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
  replies?: ReplyField[];
}

export interface CardItemStuctureProps {
  comment: Comment;
  key: number;
  idReply: string;
  isReplyMode: boolean;
  handleReplyClick: (id: string) => void;
  setReplyMode?: (isReplyMode: boolean) => void;
  onAddReply?: (parentId: number, newReply: ItemField) => void;
}

export interface CardItemProps {
  handleReplyClick: (id: string) => void;
  item?: ReplyField;
  key: number;
  isReplyMode: boolean;
  setReplyMode?: (isReplyMode: boolean) => void;
  idReply: string;
  parentId?: number;
  threadOwner?: string;
  onAddReply?: (parentId: number, newReply: ItemField) => void; // Callback function to add a new reply
}
