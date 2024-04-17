// eslint-disable-next-line no-unused-vars
import React from "react";
import cl from "./Book.module.scss";
import {Link} from "react-router-dom";

function Book(props) {
    // eslint-disable-next-line react/prop-types
    const {imageUrl, author, name} = props;

    return (
        <Link to="/bookdetail">
            <div className={cl.wrap}>
                <img src={imageUrl} alt="photo"/>
                <p className={cl.authorText}>{author}</p>
                <p className={cl.nameText}>{name}</p>
            </div>
        </Link>
    );
}

export default Book;
