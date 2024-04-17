import Films from "./components/Films/Films.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import AudioCard from "./components/AudioCard/AudioCard.jsx";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" index element={<AudioCard />} />
          <Route path="/test" element={<AudioCard />} />
          <Route path="/films" element={<Films/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
