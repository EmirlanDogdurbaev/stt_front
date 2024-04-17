import cl from "./Homepage.module.scss";
import {Link} from "react-router-dom";

function Homepage() {
    return (<div className={cl.Home}>
        <div>
            <Link to={"/test"}>
                <div>
                    <h3>
                        Уроки <br/>кыргызского языка
                    </h3>
                </div>
                <div>
                    <p>Аудирование, чтение и  граматика.
                        Теория и практика</p>


                </div>
            </Link>
            <Link to={"/home"}>
                <div>
                    <h3>
                        Учить <br/> кыргызский по книгам
                    </h3>
                </div>
                <div>
                    <p>
                        Читайте кыргызские книги с переводом и озвучкой
                    </p>
                </div>
            </Link> <Link to={"/home"}>
            <div>
                <h3>
                    Учить <br/> кыргызский по фильмам
                </h3>
            </div>
            <div>
                <p>
                    Смотри фильмы с субтитрами, переводом и озвечкой
                </p>
                <p>
                    Загрузите своё видео и сгенерируйте свои субтитры
                </p>
            </div>
        </Link> <Link to={"/home"}>
            <div>
                <h3>
                Учить <br/> кыргызский по песням
                </h3>
            </div>
            <div>
                <p>
                    Слушайте песни с субтитрами, переводом и озвечкой
                </p>
                <p>
                    Загрузите своё аудио и сгенерируйте свои субтитры
                </p>
            </div>
        </Link>
        </div>

    </div>);
}

export default Homepage;
