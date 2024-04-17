import React from "react";
import cl from "./Audiopage.module.scss";
import AudioCard from "../../components/AudioCard/AudioCard";
import FlexCard from "../../components/FlexCard/FlexCard";

function Audiopage() {
  const songsData = [
    {
      songName: "Песня 1",
      authorName: "Автор 1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },
    {
      songName: "Песня 2",
      authorName: "Автор 2",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },
    {
      songName: "Песня 1",
      authorName: "Автор 1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },
    {
      songName: "Песня 2",
      authorName: "Автор 2",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },

    {
      songName: "Песня 1",
      authorName: "Автор 1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },
    {
      songName: "Песня 2",
      authorName: "Автор 2",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },
    {
      songName: "Песня 1",
      authorName: "Автор 1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },
    {
      songName: "Песня 2",
      authorName: "Автор 2",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xvNtsNVxFRY_eqFm-Hmyrlqo0hEvGmqbkq5mADcWWA&s",
    },
    // Добавьте остальные данные о песнях по аналогии
  ];
  return (
    <>
      <FlexCard />
      <div className={cl.wrap}>
        {songsData.map((song, index) => (
          <AudioCard
            key={index}
            songName={song.songName}
            authorName={song.authorName}
            imageUrl={song.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Audiopage;
