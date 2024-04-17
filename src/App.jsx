import Films from "./components/Films/Films.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/Register.jsx";
import Login from "./components/Auth/Login/Login.jsx";
import Books from "./components/Books/Books.jsx";
import FlexCard from "./components/FlexCard/FlexCard.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

function App() {
  return (
    <>
      <Layout>
        {!localStorage.getItem("token") ? (
          <Routes>
            <Route path="/" index element={<Homepage />} />
            <Route path="/test" element={<FlexCard />} />
            <Route path="/films" element={<Films />} />
            <Route path="/books" element={<Books />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/signup" index element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </Layout>
    </>
  );
}

export default App;
