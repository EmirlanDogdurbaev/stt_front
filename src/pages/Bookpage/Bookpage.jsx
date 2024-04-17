import React from "react";
import cl from "./Bookpage.module.scss";
import Book from "../../components/Book/Book";

function Bookpage() {
  const books = [
    {
      imageUrl:
        "https://adebiportal.kz/storage/tmp/resize/books/1200_0_d64ca49c4e05665d75d365b0465f8d91.jpg",
      author: "Чынгыз Айтматов",
      name: "Джамиля",
    },
    {
      imageUrl:
        "https://bookhouse.kg/media/galleryphoto/2022/4/bda94cd3-748d-4e3e-b90d-058e6a9c9955.jpeg.600x780_q94.jpg",
      author: "Чынгыз Айтматов",
      name: "Сынган кылыч",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1k9Sh8IMOvQ6ETs9MCAUABaSojwdF2xhumQyjfyRbA&s",
      author: "Чынгыз Айтматов",
      name: "Ак кеме",
    },
    {
      imageUrl:
        "https://i.pinimg.com/236x/6f/2c/82/6f2c824d515c5224ea65f5016f4b5a65.jpg",
      author: "Чынгыз Айтматов",
      name: "Кылым карытар бир кун",
    },
  ];
  return (
    <div className={cl.wrap}>
      {books.map((book, index) => (
        <Book
          key={index}
          imageUrl={book.imageUrl}
          author={book.author}
          name={book.name}
        />
      ))}
    </div>
  );
}

export default Bookpage;
