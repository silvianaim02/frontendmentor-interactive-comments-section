import { useState, FC } from 'react'
import PlusSVG from "../assets/images/icon-plus.svg"
import MinusSVG from "../assets/images/icon-minus.svg"
import data from '../data.json'
import { CardItemProps } from '../types'
import { postedAt } from '../utils'
import FieldCommentCard from './FieldCommentCard'

const CardItem: FC<CardItemProps> = ({ setReplyMode, handleReplyClick, isReplyMode, item, idReply, onAddReply, parentId }) => {
  // State untuk menyimpan nilai warna
  const [redColor, setRedColor] = useState('#ED6368');
  const [moderateBlueColor, setModerateBlueColor] = useState('#5357B6');

  // Fungsi untuk menangani perubahan warna saat tombol dihover
  const handleRedHover = () => {
    setRedColor('var(--pale-red)');
  };
  const handleModerateBlueHover = () => {
    setModerateBlueColor('var(--light-grayish-blue)');
  };

  // Fungsi untuk menangani perubahan warna saat tombol tidak dihover
  const handleMouseLeave = () => {
    setRedColor('#ED6368');
    setModerateBlueColor('#5357B6')
  };

  // Mencari dan menyoroti teks yang dimulai dengan '@'
  function highlightedText(text: string) {
    const highlight = text.split(' ').map((word, index) => {
      if (word.toLowerCase().startsWith('@')) {
        return (
          <span key={`${word}-${index}`} style={{ color: 'var(--moderate-blue)', fontWeight: '500' }}>
            {word}{` `}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    })
    return highlight;
  }

  return (
    <>
      <div className="card-wrapper">
        <div className="comment-wrapper">
          <div className="count-wrapper">
            <img src={PlusSVG} />
            <div className="numbers-vote">{item?.score}</div>
            <img src={MinusSVG} />
          </div>
          <div className="content-wrapper">
            <div className="top-section">
              <div className="top-left-section">
                <img style={{ width: "32px", height: "32px" }} src={item?.user.image.webp} />
                <p className="username">{item?.user.username}</p>
                {item?.user.username === data.currentUser.username && <div className="current-user-label"><p>you</p></div>}
                <p className="date">{item && postedAt(item.createdAt)}</p>
              </div>
              {item?.user.username === data.currentUser.username ?
                <div className="action-button">
                  <button
                    onMouseOver={handleRedHover}
                    onMouseLeave={handleMouseLeave}
                    className="delete-button">
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill={redColor} /></svg>
                    <p style={{ color: redColor }} className="delete-text">Delete</p>
                  </button>
                  <button
                    onMouseOver={handleModerateBlueHover}
                    onMouseLeave={handleMouseLeave}
                    className="edit-button">
                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill={moderateBlueColor} /></svg>
                    <p style={{ color: moderateBlueColor }} className="edit-text">Edit</p>
                  </button>
                </div>
                :
                <button
                  onClick={() => handleReplyClick(`reply-${item?.id}`)}
                  onMouseOver={handleModerateBlueHover}
                  onMouseLeave={handleMouseLeave}
                  className="reply-button">
                  <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill={moderateBlueColor} /></svg>
                  <p style={{ color: moderateBlueColor }} className="reply-text">Reply</p>
                </button>
              }
            </div>
            <div className="body-section">
              {item && highlightedText(item.content)}
            </div>
            <div className="bottom-section">
              <div className="count-wrapper-mobile">
                <img src={PlusSVG} />
                <div className="numbers-vote">5</div>
                <img src={MinusSVG} />
              </div>
              {item?.user.username === data.currentUser.username ?
                <div className="action-button-mobile">
                  <button
                    onMouseOver={handleRedHover}
                    onMouseLeave={handleMouseLeave}
                    className="delete-button">
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill={redColor} /></svg>
                    <p style={{ color: redColor }} className="delete-text">Delete</p>
                  </button>
                  <button
                    onMouseOver={handleModerateBlueHover}
                    onMouseLeave={handleMouseLeave}
                    className="edit-button">
                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill={moderateBlueColor} /></svg>
                    <p style={{ color: moderateBlueColor }} className="edit-text">Edit</p>
                  </button>
                </div>
                :
                <button
                  onClick={() => handleReplyClick(`reply-${item?.id}`)}
                  onMouseOver={handleModerateBlueHover}
                  onMouseLeave={handleMouseLeave}
                  className="reply-button-mobile">
                  <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill={moderateBlueColor} /></svg>
                  <p style={{ color: moderateBlueColor }} className="reply-text">Reply</p>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
      {/* Reply Input */}
      {isReplyMode && idReply === `reply-${item?.id}` && (
        <FieldCommentCard
          setReplyMode={setReplyMode}
          onAddReply={onAddReply}
          actionReply={`REPLY`}
          parentId={parentId}
          threadOwner={item?.user.username}
        />
      )}
    </>
  )
};

export default CardItem;
