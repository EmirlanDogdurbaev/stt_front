import React, { useEffect, useState } from "react";
import classes from "./Filmpage.module.scss";
import Film from "../../components/Film/Film";
import FlexCard from "../../components/FlexCard/FlexCard";
import axios from "axios";
import FilmModal from "../../components/FilmModal/FilmModal";

const Filmpage = () => {
  const [films, setFilms] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await axios.get("http://192.168.54.19:8000/movies/");
        setFilms(response.data);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }

    fetchFilms();
  }, []);

  return (
    <>
      <FilmModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
      <FlexCard
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />

      <div className={classes.Filmpage}>
        {films.map((film, index) => (
          <Film
            className={classes.Filmpage__item}
            key={index}
            id={film.id}
            imgUrl={film.image}
            title={film.title}
          />
        ))}
      </div>
    </>
  );
};

export default Filmpage;
