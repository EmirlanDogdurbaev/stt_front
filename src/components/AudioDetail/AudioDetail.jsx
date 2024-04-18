import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import classes from "./AudioDetail.module.scss";

const AudioDetail = () => {
  const [audioData, setAudioData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.54.19:8000/movies/${id}`
        );
        setAudioData(response.data);
      } catch (error) {
        console.error("Error fetching audio data:", error);
      }
    };

    fetchAudioData();

    return () => {
      setAudioData(null);
    };
  }, [id]);

  if (!audioData) {
    return <div>Loading...</div>;
  }

  const { file, subtitles } = audioData;
  console.log(file);

  const handleSubtitlesRequest = async (language) => {
    try {
      const response = await axios.get(
        `http://192.168.54.19:8000/movies/${id}/subtitles?language=${language}`
      );
      setAudioData(response.data);
    } catch (error) {
      console.error("Error fetching subtitles:", error);
    }
  };

  return (
    <div className={classes.wrap}>
      <div className={classes.left}>
        <audio className={classes.leftArea} controls>
          <source src={file} type="audio/mpeg" />
        </audio>
      </div>
      <div className={classes.right}>
        <p className={classes.rText}>
          {subtitles
            ? subtitles
            : "Включите субтитры, чтобы получить текст с аудио"}
        </p>
        <div className={classes.rbtns}>
          <div
            className={classes.rsmall}
            onClick={() => handleSubtitlesRequest("kg")}
          >
            <p>Кыргызский</p>
          </div>
          <div
            className={classes.rsmall}
            onClick={() => handleSubtitlesRequest("ru")}
          >
            <p>Русский</p>
          </div>
          <div
            className={classes.rsmall}
            onClick={() => handleSubtitlesRequest("en")}
          >
            <p>Английский</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioDetail;
