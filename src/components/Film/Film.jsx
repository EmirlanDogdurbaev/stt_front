import classes from "./Film.module.scss";

const Film = (props) => {
    const { imgUrl, title } = props;
    return ( 
        <div className={classes.Film}>
            <img src={imgUrl} alt="poster" className={classes.Film__poster} />
            <h3 className={classes.Film__title}>{title}</h3>
        </div>    
     );
}
 
export default Film;