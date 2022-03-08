import { useState } from "react";
import "./App.css";
import { HashRouter, Routes /*Route*/ } from "react-router-dom";
/*import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";*/
import Linies from "./Linies";
import Caixes from "./Caixes";

export default function App() {
  const [draw, setDraw] = useState(false);
  return (
    <HashRouter>
      <Routes>
        {/*<Route path="/" element={<Layout />}>
          <Route index element={<Home />} />*/}
        <div className="App">
          <Linies draw={draw} />
          <Caixes setDraw={setDraw} />
        </div>
        {/*<Route path="*" element={<NoPage />} />
        </Route>*/}
      </Routes>
    </HashRouter>
  );
}
