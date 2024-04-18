import React from "react";
import classes from "./Audiopage.module.scss";
import AudioCard from "../../components/AudioCard/AudioCard";
import { Link } from "react-router-dom";

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
    <div className={classes.Audiopage}>
      <aside className={classes.Audiopage__navigation}>
        <ul className={classes.Audiopage__links}>
          <li className={classes.Audiopage__link}>Каталог аудиозаписей</li>
          <li className={classes.Audiopage__link}>Свои аудиозаписи</li>
        </ul>
      </aside>
      <section className="Audiopage__content">
        <h3 className={classes.Audiopage__title}>Аудиозаписи</h3>
        <ul className={classes.Audiopage__audios}>
          <li className={classes.Audiopage__audio}>
            <Link to="#">
              <audio>
                <source
                  src="https://soundcloud.com/21savage/21-savage-travis-scott-metro?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  type="audio/mp3"
                />
              </audio>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Audiopage;
