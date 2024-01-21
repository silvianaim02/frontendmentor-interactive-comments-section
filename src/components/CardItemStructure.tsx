import { FC } from 'react'
import FieldCommentCard from './FieldCommentCard'
import CardItem from './CardItem'
import { CardItemStuctureProps } from '../types'

const CardItemStucture: FC<CardItemStuctureProps> = ({ setReplyMode, handleReplyClick, onAddReply, isReplyMode, comment, idReply }) => {
  return (
    <>
      {/* Main Card */}
      <CardItem
        handleReplyClick={handleReplyClick}
        item={comment}
        key={comment.id}
        idReply={idReply}
        isReplyMode={isReplyMode}
        setReplyMode={setReplyMode}
        onAddReply={onAddReply}
        parentId={comment.id}
        threadOwner={comment.user.username}
      />

      {/* Reply Input */}
      {isReplyMode && idReply === `reply-${comment.id}` && (
        <FieldCommentCard setReplyMode={setReplyMode} onAddReply={onAddReply} actionReply={`REPLY`} parentId={comment.id} threadOwner={comment.user.username} />
      )}

      {/* Reply Card Inheritance */}
      <div className="reply-wrapper">
        <div className="horizontal-line-wrapper">
          <div className="horizontal-line"></div>
        </div>
        <div className="reply-list-wrapper">
          {comment.replies?.length !== 0 ? comment.replies?.map((item, index) => (
            <CardItem
              handleReplyClick={handleReplyClick}
              item={item}
              key={index}
              idReply={idReply}
              isReplyMode={isReplyMode}
              setReplyMode={setReplyMode}
              onAddReply={onAddReply}
              parentId={comment.id}
              threadOwner={comment.user.username}
            />
          )) : null}
        </div>
      </div>
    </>
  )
};

export default CardItemStucture;
