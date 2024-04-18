import React, { useEffect, useRef, useState } from "react";
import cl from "./BookDetail.module.scss";
import trans from "../../assets/transfer.png";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookDetail() {
  const dynamic_text = `Я был правозащитником, а бывших правозащитников не бывает» — на
     вопросы RFI ответил заместитель председателя кабинета министров
     Кыргызстана Эдиль Байсалов «Перелом в сознании произошел», — завил
     в интервью RFI по поводу прав женщин заместитель председателя
     кабинета министров Кыргызстана Эдиль Байсалов, который прибыл в Париж
     в связи с празднованиями в честь 75-летия принятия Всеобщей декларации
     прав человека. Он также ответил на вопросы об экологических правах,
     борьбе с коррупцией и об ограничивающих свободу гражданского общества
     законопроектах. Я был правозащитником, а бывших правозащитников
     не бывает» — на вопросы RFI ответил заместитель председателя кабинета
     министров Кыргызстана Эдиль Байсалов «Перелом в сознании
     произошел», — завил в интервью RFI по поводу прав женщин заместитель
     председателя кабинета министров Кыргызстана Эдиль Байсалов, который
     прибыл в Париж в связи с празднованиями в честь 75-летия принятия
     Всеобщей декларации прав человека. Он также ответил на вопросы об
     экологических правах, борьбе с коррупцией и об ограничивающих свободу
     гражданского общества законопроектах.`;

  const [filmData, setFilmData] = useState(null);
  const { id } = useParams(); // Получение id фильма из URL

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.54.19:8000/books/${id}`
        );
        setFilmData(response.data); // Сохранение полученных данных о фильме
        console.log(response);
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    fetchFilmData();

    return () => {
      setFilmData(null);
    };
  }, [id]);

  if (!filmData) {
    return <div>Loading...</div>;
  }

  const { file, subtitles } = filmData;

  const handleSubtitlesRequest = async (language) => {
    try {
      const response = await axios.get(
        `http://192.168.54.19:8000/movies/${id}/subtitles?language=${language}`
      );
      setFilmData(response.data); // Сохранение полученных субтитров
    } catch (error) {
      console.error("Error fetching subtitles:", error);
    }
  };
  return (
    <div className={cl.wrap}>
      <div className={cl.right}>
        <p className={cl.rText}>{dynamic_text}</p>
        <div className={cl.rbtns}>
          <div
            className={cl.rsmall}
            onClick={() => handleSubtitlesRequest("kg")}
          >
            <p>Кыргызский</p>
          </div>
        </div>
      </div>

      <img src={trans} alt="photo" className={cl.trans} />

      <div className={cl.right}>
        <p className={cl.rText}>{dynamic_text}</p>
        <div className={cl.rbtns}>
          <div
            className={cl.rsmall}
            onClick={() => handleSubtitlesRequest("ru")}
          >
            <p>Русский</p>
          </div>
          <div
            className={cl.rsmall}
            onClick={() => handleSubtitlesRequest("en")}
          >
            <p>Английский</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
