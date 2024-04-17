import Films from "./components/Films/Films.jsx";
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
          <Layout>
              <Routes>
                  <Route path="/"  exact element={<App/>} />
                  <Route path="/films"  element={<Films/>} />
              </Routes>
          </Layout>
        </>
    )
}

export default App
