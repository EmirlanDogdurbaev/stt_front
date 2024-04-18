import React, { useState } from "react";
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
    
  ];
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className={classes.Audiopage}>
      <section className="Audiopage__content">
      <input
      accept=".mp3"
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange} />
      <button onClick={() => document.getElementById('fileInput').click()} className={classes.btn }>Загрузите своё аудио</button>

        <h3 className={classes.Audiopage__title}>Аудиозаписи</h3>
        {selectedFile!==null?
        <ul className={classes.Audiopage__audios}>
        {songsData.map((item, id)=>{
          return<div key={id}>
            <AudioCard songName={item.songName} authorName={item.authorName} imageUrl={item.imageUrl}/>
          </div>
        })}
      </ul>:<>
        
      </>}
      </section>

    </div>
  );
}

export default Audiopage;
