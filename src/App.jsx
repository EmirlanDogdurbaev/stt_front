import Films from "./components/Films/Films.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import AudioCard from "./components/AudioCard/AudioCard.jsx";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AudioCard />}/>
            <Route path="/test" exact element={<AudioCard/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
