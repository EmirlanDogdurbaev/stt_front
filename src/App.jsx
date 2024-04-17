import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact component={App} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
