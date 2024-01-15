import { FC } from 'react';
import data from '../data.json'

interface FieldCommentCardProps {
  actionReply: string;
}

const JuliusomoAva = data.currentUser.image.webp;

const FieldCommentCard: FC<FieldCommentCardProps> = ({ actionReply }) => {
  return (
    <div className="card-wrapper">
      <div className="field-comment-wrapper">
        <img className="current-user-avatar" src={JuliusomoAva} style={{ width: "32px", height: "32px", marginTop: "4px" }} />
        <textarea placeholder="Add a comment…" />
        <button className="send-button">{actionReply}</button>
        <div className="ava-send-button">
          <img className="current-user-avatar-mobile" src={JuliusomoAva} style={{ width: "32px", height: "32px" }} />
          <button className="send-button-mobile">{actionReply}</button>
        </div>
      </div>
    </div>
  )
};

export default FieldCommentCard;
