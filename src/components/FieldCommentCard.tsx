import { FC, useState } from 'react';
import data from '../data.json'
import { Comment, ItemField } from '../types';

// Function to generate a unique ID
const generateUniqueId = (): number => {
  // Generate a random number between 1 and 1000000 (adjust the range as needed)
  const randomNumber = Math.floor(Math.random() * 1000000) + 1;

  // Combine with the current timestamp to ensure uniqueness
  const uniqueId = Date.now() * 1000000 + randomNumber;

  return uniqueId;
};


interface FieldCommentCardProps {
  actionReply: string;
  parentId?: number;
  treadOwner?: string;
  onAddComment?: (newComment: Comment) => void; // Callback function to add a new comment
  onAddReply?: (parentId: number, newReply: ItemField) => void; // Callback function to add a new reply
}

const JuliusomoAva = data.currentUser.image.webp;

const FieldCommentCard: FC<FieldCommentCardProps> = ({ actionReply, onAddComment, onAddReply, parentId, treadOwner }) => {
  const [commentText, setCommentText] = useState('');
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
      treadOwner) {
      // Assuming you have the parent comment ID available
      const newReply = {
        id: generateUniqueId(),
        content: commentText,
        createdAt: new Date().toUTCString(),
        score: 0,
        replyingTo: treadOwner,
        user: data.currentUser,
      };

      onAddReply(parentId, newReply);
    }

    // Reset the comment text after submitting
    setCommentText('');
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
          <button className="send-button-mobile">{actionReply}</button>
        </div>
      </div>
    </div>
  )
};

export default FieldCommentCard;
