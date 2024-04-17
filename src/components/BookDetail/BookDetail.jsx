import React from "react";
import cl from "./BookDetail.module.scss";
import { Link } from "react-router-dom";
import clipboard from "clipboard-copy";

function BookDetail() {
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

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([dynamic_text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleCopyText = () => {
    clipboard(dynamic_text);
    alert("Текст скопирован в буфер обмена ");
  };

  return (
    <div className={cl.wrap}>
      <div className={cl.left}>
        <textarea
          placeholder="Введите текст"
          className={cl.leftArea}
        ></textarea>
        <Link to="#">
          <div className={cl.btn}>
            <p className={cl.btnText}>Загрузить книгу</p>
          </div>
        </Link>
      </div>
      <div className={cl.right}>
        <p className={cl.rText}>{dynamic_text}</p>
        <div className={cl.rbtns}>
          <div className={cl.rsmall} onClick={handleDownloadTxt}>
            <p>Скачать .txt</p>
          </div>

          <div className={cl.rsmall} onClick={handleCopyText}>
            <p>Копировать</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
