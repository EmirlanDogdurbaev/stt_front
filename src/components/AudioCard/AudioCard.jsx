import React, { useState } from "react";
import cl from "./AudioCard.module.scss";
import { Link } from "react-router-dom";

const AudioCard = (props) => {
  const [state, setState] = useState(1);

  if (props.status === 1) {
    setState(1);
  }
  if (props.status === 2) {
    setState(2);
  }
  if (props.status === 3) {
    setState(3);
  }

  const handleClick = () => {
    const randomState = Math.floor(Math.random() * 3) + 1;
    setState(randomState);
  };

  return (
    <>
      <div className={cl.wrap}>
        <Link to="#">
          <div
            style={{
              boxShadow:
                state === 1
                  ? "0px 0px 20px 2px #21FF87"
                  : state === 2
                    ? "0px 0px 20px 2px #FF5F5F"
                    : "0px 0px 20px 2px #D9B32D",
            }}
            onClick={handleClick}
          >
            <p
              className={cl.btnText}
              style={{
                color:
                  state === 1 ? "#21FF87" : state === 2 ? "#FF5F5F" : "#D9B32D",
              }}
            >
              Загрузить
              {state === 1 ? " видео" : state === 2 ? " аудио" : " книгу"}
            </p>
          </div>
        </Link>
        <p className={cl.rightText}>
          Загрузите своё
          {state === 1 ? " видео" : state === 2 ? " аудио" : " книгу"}, и
          получите
          {state === 1 || state === 2 ? " текст" : " озвучку"}
        </p>
      </div>
    </>
  );
};
export default AudioCard;
