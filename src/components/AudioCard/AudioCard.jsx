import React from "react";
import cl from "./AudioCard.module.scss";
import { Link } from "react-router-dom";

function AudioCard({ songName, authorName, imageUrl, id }) {
  return (
    <Link to={`/videodetail/${id}`} className={cl.wrap}>
      <img src={imageUrl} alt="photo" className={cl.img} />
      <div className={cl.right}>
        <p className={cl.nameText}>{songName}</p>
        <p className={cl.authorText}>{authorName}</p>
      </div>
    </Link>
  );
}

export default AudioCard;
