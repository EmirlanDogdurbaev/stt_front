import React from "react";
import cl from "./Book.module.scss";

function Book(props) {
  const { imageUrl, author, name } = props;

  return (
    <div className={cl.wrap}>
      <img src={imageUrl} alt="photo" />
      <p className={cl.authorText}>{author}</p>
      <p className={cl.nameText}>{name}</p>
    </div>
  );
}

export default Book;
