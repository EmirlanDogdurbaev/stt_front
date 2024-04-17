import classes from "./Filmpage.module.scss";
import Film from "../../components/Film/Film";
import FlexCard from "../../components/FlexCard/FlexCard";

const Filmpage = () => {
  const films = [
    {
      imgUrl: "https://kereez.kg/images/November_2023/maxresdefault.jpg",
      title: "Разбой",
    },
    {
      imgUrl:
        "https://st-1.akipress.org/cdn-st-0/qel/9/2538497.7233714f20ebea18f838ccf0af190a36.jpg",
      title: "Бейиш эненин таманында",
    },
    {
      imgUrl: "https://kloop.kg/wp-content/uploads/2013/11/salam-NY-4.jpg",
      title: "Салам, Нью-Йорк",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/jAJRNmJLB0Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBnFlFPXIHYczkABHAxbOMKRj7KEg",
      title: "Биртууганчик",
    },
    {
      imgUrl: "https://st-1.akipress.org/st_runews/5/1406455.1.1506315652.jpg",
      title: "В поиках мамы",
    },
    {
      imgUrl:
        "https://s.bishkek.kg/section/afisha_event/upload/pers/219/img/afisha/000/000/002/aas_618dfecd3ae4f.jpg",
      title: "Аяш",
    },
  ];
  return (
    <>
      <FlexCard />
      <div className={classes.Filmpage}>
        {films.map((film, index) => (
          <Film
            className={classes.Filmpage__item}
            key={index}
            imgUrl={film.imgUrl}
            title={film.title}
          />
        ))}
      </div>
    </>
  );
};

export default Filmpage;
