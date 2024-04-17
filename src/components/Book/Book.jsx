import React from "react";
import cl from "./Book.module.scss";
import { Link } from "react-router-dom";

function Book(props) {
  const { imageUrl, author, name } = props;

  return (
    <Link to="/bookdetail">
      <div className={cl.wrap}>
        <img src={imageUrl} alt="photo" />
        <p className={cl.authorText}>{author}</p>
        <p className={cl.nameText}>{name}</p>
      </div>
    </Link>
  );
}

export default Book;
