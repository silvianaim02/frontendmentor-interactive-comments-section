import { FC, useState } from 'react';
import data from '../data.json'
import { Comment, ReplyField } from '../types';
import { generateUniqueId } from '../utils';

interface FieldCommentCardProps {
  setReplyMode?: (isReplyMode: boolean) => void;
  actionReply: string;
  parentId?: number;
  threadOwner?: string;
  onAddComment?: (newComment: Comment) => void; // Callback function to add a new comment
  onAddReply?: (parentId: number, newReply: ReplyField) => void; // Callback function to add a new reply
}

const JuliusomoAva = data.currentUser.image.webp;

const FieldCommentCard: FC<FieldCommentCardProps> = ({ setReplyMode, actionReply, onAddComment, onAddReply, parentId, threadOwner }) => {
  const [commentText, setCommentText] = useState(threadOwner ? `@${threadOwner} ` : '');
  const handleCommentSubmit = () => {
    if (actionReply === 'SEND' && onAddComment) {
      // Assuming you have a function to generate a unique comment ID
      const newComment = {
        id: generateUniqueId(),
        content: commentText,
        createdAt: new Date().toUTCString(),
        score: 0,
        user: data.currentUser,
        replies: [],
      };

      onAddComment(newComment);
    } else if (
      actionReply === 'REPLY' &&
      onAddReply &&
      parentId &&
      threadOwner) {
      // Assuming you have the parent comment ID available
      const newReply = {
        id: generateUniqueId(),
        content: commentText,
        createdAt: new Date().toUTCString(),
        score: 0,
        replyingTo: threadOwner,
        user: data.currentUser,
      };

      onAddReply(parentId, newReply);

    }
    // Reset the comment text after submitting
    setCommentText('');
    setReplyMode && setReplyMode(false);
  };

  return (
    <div className="card-wrapper">
      <div className="field-comment-wrapper">
        <img className="current-user-avatar" src={JuliusomoAva} style={{ width: "32px", height: "32px", marginTop: "4px" }} />
        <textarea placeholder="Add a comment…"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)} />
        <button className="send-button" onClick={handleCommentSubmit}>{actionReply}</button>
        <div className="ava-send-button">
          <img className="current-user-avatar-mobile" src={JuliusomoAva} style={{ width: "32px", height: "32px" }} />
          <button className="send-button-mobile" onClick={handleCommentSubmit}>{actionReply}</button>
        </div>
      </div>
    </div>
  )
};

export default FieldCommentCard;
