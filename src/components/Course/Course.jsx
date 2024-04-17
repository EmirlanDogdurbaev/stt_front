import classes from "./Course.module.scss"

const Course = () => {
    return ( 
        <div className={classes.Course}>
            <h2 className="Course__title">А1 Начинающий уровень</h2>
            <ul className="Course__lessons">
                <li className="Course_lesson lesson">
                    <h3 className="lesson__title"></h3>
                    {/* <Link className="lesson__link" to={`/lesson:${props.id}`}>
                        Изучить
                    </Link> */}
                </li>
            </ul>
        </div>
     );
}
 
export default Course;