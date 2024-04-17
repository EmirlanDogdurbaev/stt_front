import classes from "./FilmDetail.module.scss";
import { Link } from "react-router-dom";

const FilmDetail = () => {
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
    <div className={classes.wrap}>
      <div className={classes.left}>
        <video className={classes.leftArea} autoPlay controls>
          <source
            src="https://cdn.pixabay.com/video/2023/12/10/192687-893427276_large.mp4"
            allowfullscreen
            type="video/mp4"
          />
        </video>
        <Link to="#">
          <div className={classes.btn}>
            <p className={classes.btnText}>Загрузить видео</p>
          </div>
        </Link>
      </div>
      <div className={classes.right}>
        <p className={classes.rText}>{dynamic_text}</p>
        <div className={classes.rbtns}>
          <div className={classes.rsmall}>
            <p>Скачать .txt</p>
          </div>
          <div className={classes.rsmall}>
            <p>Скачать .pdf</p>
          </div>
          <div className={classes.rsmall}>
            <p>Копировать</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
