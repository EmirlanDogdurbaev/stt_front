import cl from "./Homepage.module.scss";
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <div className={cl.Home}>
            <div>
                <Link to={"/home"}>
                    <div>
                        <h3>
                            Уроки кыргызского языка
                        </h3>
                    </div>
                    <div>
                        <p>
                            Аудирование, чтение и граматика.
                            Теория и практика
                        </p>
                    </div>
                </Link>
            </div>

            asdasdsdas
            sadasdasdas
            das
            das
            dq
        </div>);
}

export default Homepage;
