import { Link } from "react-router-dom";
import CardItemStucture from "../components/CardItemStructure";
import { useEffect, useState } from "react";
import FieldCommentCard from "../components/FieldCommentCard";
import dataComments from '../../src/data.json'
import { Comment, ReplyField } from "../types";

const Home = () => {
  const [isReplyMode, setReplyMode] = useState(false);
  const [idReply, setIdReply] = useState("no");
  const handleReplyClick = (id: string) => {
    setReplyMode(!isReplyMode);
    console.log(id);
    setIdReply(id)
  };
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const commentLS = localStorage.getItem('commentsData');
    if (commentLS) {
      const retrievedArray = JSON.parse(commentLS) as Comment[];
      setComments(retrievedArray);
    } else {
      setComments(dataComments.comments);
      localStorage.setItem('commentsData', JSON.stringify(dataComments.comments));
    }
  }, []);

  const handleAddComment = (newComment: Comment) => {
    // Update local storage and state with the new comment
    const updatedComments = [...comments, newComment] as Comment[]
    setComments(updatedComments);
    localStorage.setItem('commentsData', JSON.stringify(updatedComments));
  };

  const handleAddReply = (parentId: number, newReply: ReplyField) => {
    // Find the parent comment in the state and update it with the new reply
    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies ?? []), newReply],
        };
      }
      return comment;
    }) as ReplyField[];

    setComments(updatedComments);
    localStorage.setItem('commentsData', JSON.stringify(updatedComments));
  };

  return (
    <div className="main-wrapper">
      {comments?.length !== 0 ? comments?.map((comment, index) => (
        <CardItemStucture
          setReplyMode={setReplyMode}
          onAddReply={handleAddReply}
          idReply={idReply}
          comment={comment}
          key={index}
          isReplyMode={isReplyMode}
          handleReplyClick={handleReplyClick}
        />
      )) : <p>kosong</p>}

      {/* Field Comment Card */}
      <FieldCommentCard actionReply={`SEND`} onAddComment={handleAddComment} />

      {/* ATTRIBUTION */}
      <div className="attribution">
        Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>.
        Coded by <Link to="https://silvianaim.com" target="_blank">Silvia Naim</Link>.
      </div>
    </div>
  )
};

export default Home;
