import { Link } from "react-router-dom";
import CardItemStucture from "../components/CardItemStructure";
import { useState } from "react";
import FieldCommentCard from "../components/FieldCommentCard";
import dataComments from '../../src/data.json'

const Home = () => {
  const [isReplyMode, setReplyMode] = useState(false);
  const handleReplyClick = () => {
    setReplyMode(!isReplyMode);
  };
  const [comments,] = useState(dataComments.comments);


  return (
    <div className="main-wrapper">
      {comments.length !== 0 ? comments?.map((comment, index) => (
        <CardItemStucture comment={comment} key={index} isReplyMode={isReplyMode} handleReplyClick={handleReplyClick} />
      )) : <p>kosong</p>}

      {/* Field Comment Card */}
      <FieldCommentCard actionReply={`SEND`} />

      {/* ATTRIBUTION */}
      <div className="attribution">
        Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>.
        Coded by <Link to="https://silvianaim.com" target="_blank">Silvia Naim</Link>.
      </div>
    </div>
  )
};

export default Home;
