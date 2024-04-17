import React from "react";
import cl from "./AudioDetail.module.scss";
import { Link } from "react-router-dom";

function AudioDetail() {
  const dynamic_text = `Я был правозащитником, а бывших правозащитников не бывает» — на
          вопросы RFI ответил заместитель председателя кабинета министров
          Кыргызстана Эдиль Байсалов «Перелом в сознании произошел», — завил
          в интервью RFI  по поводу прав женщин заместитель председателя
          кабинета министров Кыргызстана Эдиль Байсалов, который прибыл в Париж
          в связи с празднованиями в честь 75-летия принятия Всеобщей декларации
          прав человека. Он также ответил на вопросы об экологических правах,
          борьбе с коррупцией и об ограничивающих свободу гражданского общества
          законопроектах. Я был правозащитником, а бывших правозащитников
          не бывает» — на вопросы RFI ответил заместитель председателя кабинета
          министров Кыргызстана Эдиль Байсалов «Перелом в сознании
          произошел», — завил в интервью RFI  по поводу прав женщин заместитель
          председателя кабинета министров Кыргызстана Эдиль Байсалов, который
          прибыл в Париж в связи с празднованиями в честь 75-летия принятия
          Всеобщей декларации прав человека. Он также ответил на вопросы об
          экологических правах, борьбе с коррупцией и об ограничивающих свободу
          гражданского общества законопроектах.`;

  return (
    <div className={cl.wrap}>
      <div className={cl.left}>
        <audio
          controls
          className={cl.audio}
          src="/media/cc0-audio/t-rex-roar.mp3"
        ></audio>
        <Link to="#">
          <div className={cl.btn}>
            <p className={cl.btnText}>Загрузить книгу</p>
          </div>
        </Link>
      </div>
      <div className={cl.right}>
        <p className={cl.rText}>{dynamic_text}</p>
        <div className={cl.rbtns}>
          <div className={cl.rsmall}>
            <p>Скачать .txt</p>
          </div>
          <div className={cl.rsmall}>
            <p>Скачать .pdf</p>
          </div>
          <div className={cl.rsmall}>
            <p>Копировать</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioDetail;
