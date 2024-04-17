import classes from "./Films.module.scss"

const Films = () => {
  return (  
    <div className={classes.Films}>
      <div className="Films__download">
        <button className="Films__download-btn">Загрузить видео</button>
        <p className="Films__download-text">Загрузите своё видео, и получите текст</p>
      </div>
      <ul className="Films__list">
        <li className="Films__item film">
          <h3 className="film__title">Салам Европа</h3>
          <img src="https://kereez.kg/images/November_2023/maxresdefault.jpg" alt="posterr" className="film__poster" />
        </li>
      </ul>
    </div>
  );
}

export default Films;