import Layout from "./components/Layout/Layout.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/Register.jsx";
import Login from "./components/Auth/Login/Login.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Bookpage from "./pages/Bookpage/Bookpage.jsx";
import Filmpage from "./pages/Filmpage/Filmpage.jsx";
import Audiopage from "./pages/Audiopage/Audiopage.jsx";
import BookDetail from "./components/BookDetail/BookDetail.jsx";
import FilmDetail from "./components/FilmDetail/FilmDetail.jsx";
import AudioDetail from "./components/AudioDetail/AudioDetail.jsx";
import Courses from "./components/Courses/Courses.jsx";
import CourseDetail from "./components/CourseDetail/CourseDetail.jsx";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const [audioSrc, setAudioSrc] = useState("");

  const isPlaying = useRef(false);

  useEffect(() => {
    let lastSelectedText = "";

    function getSelectedText() {
      let selectedText = "";
      if (window.getSelection) {
        selectedText = window.getSelection().toString();
      } else if (document.selection && document.selection.type !== "Control") {
        selectedText = document.selection.createRange().text;
      }
      return selectedText;
    }

    document.addEventListener("mouseup", async function () {
      const selectedText = getSelectedText();
      if (
        selectedText !== "" &&
        selectedText !== lastSelectedText &&
        !isPlaying.current
      ) {
        console.log("Выделенный текст:", selectedText);

        isPlaying.current = true;

        try {
          const response = await axios.post(
            "http://192.168.54.19:8000/tts/",
            { text: selectedText },
            { responseType: "blob" }
          );
          const audioUrl = URL.createObjectURL(response.data);
          setAudioSrc(audioUrl);

          const audio = new Audio(audioUrl);
          audio.addEventListener("ended", () => {
            isPlaying.current = false;
          });

          audio
            .play()
            .catch((error) =>
              console.log("Ошибка воспроизведения аудио:", error)
            );
        } catch (error) {
          console.error("There was a problem with the POST request:", error);
        }

        lastSelectedText = selectedText;
      }
    });

    return () => {
      document.removeEventListener("mouseup", () => {});
    };
  }, []);
  return (
    <>
      <Layout>
        {localStorage.getItem("token") ? (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" index element={<Homepage />} />
            <Route path="/videopage" element={<Filmpage />} />
            <Route path="/bookpage" element={<Bookpage />} />
            <Route path="/audiopage" element={<Audiopage />} />
            <Route path="/coursepage" element={<Courses />} />
            <Route path="/videodetail/:id" element={<FilmDetail />} />
            <Route path="/bookdetail/:id" element={<BookDetail />} />x  
            <Route path="/coursedetail" element={<CourseDetail />} />
            <Route path="/audiodetail" element={<AudioDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Layout>
    </>
  );
}

export default App;
