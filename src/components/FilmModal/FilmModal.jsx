import React from "react";
import cl from "./FilmModal.module.scss";

function FilmModal(props) {
  return (
    <div
      className={cl.wrap}
      style={{
        display: props.isModalActive ? "flex" : "none", // Изменено условие для отображения компонента
      }}
    >
      <form action="#" className={cl.content}>
        <input type="text" placeholder="Name of film" />
        <input type="file" accept="image/*" placeholder="Photo of film" />
        <input type="file" accept="video/mp4" placeholder="MP4 of film" />
        <button type="submit">Submit</button>

        <p
          className={cl.close}
          onClick={() => {
            props.setIsModalActive(!props.isModalActive);
          }}
        >
          X
        </p>
      </form>
    </div>
  );
}

export default FilmModal;
