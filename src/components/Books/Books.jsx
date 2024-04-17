import classes from "./Books.module.scss";

const Books = () => {
  return (
    <div className={classes.Books}>
      <div className="Books__download">
        <button className="Books__download-btn">Загрузить видео</button>
        <p className="Books__download-text">
          Загрузите своё видео, и получите текст
        </p>
      </div>
      <ul className="Books__list">
        <li className="Books__item book">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcwNXupoODlfESVw23kVbT2WZDMn1WDRdM_fMvDvrDA&s"
            alt="book poster"
            className="book__img"
          />
        </li>
      </ul>
    </div>
  );
};

export default Books;
