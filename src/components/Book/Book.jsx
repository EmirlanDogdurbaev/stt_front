import React from "react";
import cl from "./Book.module.scss";
import { Link } from "react-router-dom";

function Book(props) {
  const { image, author, title, id } = props;

  return (
    <Link to={`/bookdetail/${id}`}>
      <div className={cl.wrap}>
        <img src={image} alt="photo" />
        <p className={cl.authorText}>{author}</p>
        <p className={cl.nameText}>{title}</p>
      </div>
    </Link>
  );
}

export default Book;
