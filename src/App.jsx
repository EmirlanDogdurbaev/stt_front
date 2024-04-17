import Films from "./components/Films/Films.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import AudioCard from "./components/AudioCard/AudioCard.jsx";
import Books from "./components/Books/Books.jsx";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/test" element={<AudioCard />} />
          <Route path="/films" element={<Films/>}/>
          <Route path="/books" element={<Books/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
