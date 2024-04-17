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

function App() {
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
            <Route path="/audiopage/:id" element={<Audiopage />} />
            <Route path="/coursepage" element={<Courses />} />
            <Route path="/videodetail" element={<FilmDetail />} />
            <Route path="/bookdetail" element={<BookDetail />} />
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
