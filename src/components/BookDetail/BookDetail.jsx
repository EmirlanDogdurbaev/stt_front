import React, { useEffect, useRef, useState } from "react";
import cl from "./BookDetail.module.scss";
import trans from "../../assets/transfer.png";
import axios from "axios";

function BookDetail() {
  const [audioSrc, setAudioSrc] = useState("");
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

  const isPlaying = useRef(false);

  useEffect(() => {
    let lastSelectedText = "";

    function getSelectedText() {
      let selectedText = "";
      if (window.getSelection) {
        selectedText = window.getSelection().toString();
      } else if (document.selection && document.selection.type !== "Control") {
        selectedText = document.selection.createRange().text;
      }
      return selectedText;
    }

    document.addEventListener("mouseup", async function () {
      const selectedText = getSelectedText();
      if (
        selectedText !== "" &&
        selectedText !== lastSelectedText &&
        !isPlaying.current
      ) {
        console.log("Выделенный текст:", selectedText);

        isPlaying.current = true;

        try {
          const response = await axios.post(
            "http://192.168.54.19:8000/tts/",
            { text: selectedText },
            { responseType: "blob" }
          );
          const audioUrl = URL.createObjectURL(response.data);
          setAudioSrc(audioUrl);

          const audio = new Audio(audioUrl);
          audio.addEventListener("ended", () => {
            isPlaying.current = false;
          });

          audio
            .play()
            .catch((error) =>
              console.log("Ошибка воспроизведения аудио:", error)
            );
        } catch (error) {
          console.error("There was a problem with the POST request:", error);
        }

        lastSelectedText = selectedText;
      }
    });

    return () => {
      document.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <div className={cl.wrap}>
      <div className={cl.right}>
        <p className={cl.rText}>{dynamic_text}</p>
        <div className={cl.rbtns}>
          <div className={cl.rsmall}>
            <p>Кыргызский</p>
          </div>
        </div>
      </div>

      <img src={trans} alt="photo" className={cl.trans} />

      <div className={cl.right}>
        <p className={cl.rText}>{dynamic_text}</p>
        <div className={cl.rbtns}>
          <div className={cl.rsmall}>
            <p>Русский</p>
          </div>
          <div className={cl.rsmall}>
            <p>Английский</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
