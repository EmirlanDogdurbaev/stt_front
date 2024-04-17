import Layout from "./components/Layout/Layout.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/Register.jsx";
import Login from "./components/Auth/Login/Login.jsx";
import FlexCard from "./components/FlexCard/FlexCard.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Bookpage from "./pages/Bookpage/Bookpage.jsx";
import Filmpage from "./pages/Filmpage/Filmpage.jsx";

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
            <Route path="/test" element={<FlexCard />} />
            <Route path="/films" element={<Filmpage />} />
            <Route path="/films" element={<Bookpage/>} />
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
