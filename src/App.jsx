import Films from "./components/Films/Films.jsx";
import Layout from "./components/Layout/Layout.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import AudioCard from "./components/AudioCard/AudioCard.jsx";
import Register from "./components/Auth/Register/Register.jsx";
import Login from "./components/Auth/Login/Login.jsx";
import Books from "./components/Books/Books.jsx";


function App() {
    return (
        <>
            <Layout>
                {localStorage.getItem("token")  ? (
                    <Routes>
                        <Route path="/" index element={<AudioCard/>}/>
                        <Route path="/test" element={<AudioCard/>}/>
                        <Route path="/films" element={<Films/>}/>
                        <Route path="/books" element={<Books/>}/>

                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/register" index element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                )}
            </Layout>
        </>
    )
        ;
}

export default App;
