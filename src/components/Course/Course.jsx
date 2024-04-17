import classes from "./Course.module.scss"
import { Link } from "react-router-dom";

const Course = () => {
    return ( 
        <div className={classes.Course}>
            <h2 className={classes.Course__title}>А1 Начинающий уровень</h2>
            <ul className={classes.Course__lessons}>
                <li className={classes.lesson}>
                    <h3 className={classes.lesson__title}>Алфавит</h3>
                    <Link className={classes.lesson__link} to="#">
                        Изучить
                    </Link>
                </li>
                <li className={classes.lesson}>
                    <h3 className={classes.lesson__title}>Алфавит</h3>
                    <Link className={classes.lesson__link} to="#">
                        Изучить
                    </Link>
                </li>
                <li className={classes.lesson}>
                    <h3 className={classes.lesson__title}>Алфавит</h3>
                    <Link className={classes.lesson__link} to="#">
                        Изучить
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Course;