import classes from "./Filmpage.module.scss";
import {Link} from "react-router-dom";

const Filmpage = () => {
    // const films = [{
    //     imgUrl: "https://kereez.kg/images/November_2023/maxresdefault.jpg", title: "Разбой",
    // }, {
    //     imgUrl: "https://st-1.akipress.org/cdn-st-0/qel/9/2538497.7233714f20ebea18f838ccf0af190a36.jpg",
    //     title: "Бейиш эненин таманында",
    // }, {
    //     imgUrl: "https://kloop.kg/wp-content/uploads/2013/11/salam-NY-4.jpg", title: "Салам, Нью-Йорк",
    // }, {
    //     imgUrl: "https://i.ytimg.com/vi/jAJRNmJLB0Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBnFlFPXIHYczkABHAxbOMKRj7KEg",
    //     title: "Биртууганчик",
    // }, {
    //     imgUrl: "https://st-1.akipress.org/st_runews/5/1406455.1.1506315652.jpg", title: "В поиках мамы",
    // }, {
    //     imgUrl: "https://s.bishkek.kg/section/afisha_event/upload/pers/219/img/afisha/000/000/002/aas_618dfecd3ae4f.jpg",
    //     title: "Аяш",
    // },];
    return (<>
        <div className={classes.Filmpage}>
            <div className={classes.cont}>
                <nav>
                    <ul>
                        <li>
                            Видео
                        </li>
                        <li>
                            загрузить свое
                        </li>
                    </ul>
                </nav>
                <div className={classes.cont_left}>
                    <section className={classes.film}>
                        <video autoPlay="true" loop width={800} height={500}>
                            <source src="https://cdn.pixabay.com/video/2023/12/10/192687-893427276_large.mp4"
                                    type="video/mp4"/>
                        </video>
                        <div>
                            <h4>Керемет коч</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui?</p>
                            <button>
                                <Link to={"/"}>button</Link>
                            </button>
                        </div>
                    </section>

                    <section className={classes.film_card}>
                        <article>
                            <img src="" alt=""/>
                            <aside>
                                <h5>Lorem ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, temporibus!</p>

                                <Link to={"/"}>Подробнее</Link>
                            </aside>
                        </article>
                        <article>
                            <img src="" alt=""/>
                            <aside>
                                <h5>Lorem ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, temporibus!</p>

                                <Link to={"/"}>Подробнее</Link>
                            </aside>
                        </article>
                        <article>
                            <img src="" alt=""/>
                            <aside>
                                <h5>Lorem ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, temporibus!</p>

                                <Link to={"/"}>Подробнее</Link>
                            </aside>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    </>);
};

export default Filmpage;
