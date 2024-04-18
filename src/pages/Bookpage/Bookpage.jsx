import React, { useEffect, useState } from "react";
import cl from "./Bookpage.module.scss";
import Book from "../../components/Book/Book";
import FlexCard from "../../components/FlexCard/FlexCard";
import axios from "axios";

function Bookpage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://192.168.54.19:8000/book/all/");
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <FlexCard />
      <div className={cl.wrap}>
        {books.map((book, index) => (
          <Book
            id={book.id}
            key={index}
            image={book.image}
            author={book.author}
            title={book.title}
          />
        ))}
      </div>
    </>
  );
}

export default Bookpage;
