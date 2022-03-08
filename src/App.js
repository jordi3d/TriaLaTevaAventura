import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Aventura from "./Aventura";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Aventura />} />
      </Routes>
    </HashRouter>
  );
}
