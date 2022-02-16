import { useState } from "react";
import "./App.css";
import Linies from "./Linies";
import Caixes from "./Caixes";

export default function App() {
  const [draw, setDraw] = useState(false);
  return (
    <div className="App">
      <Linies draw={draw} />
      <Caixes setDraw={setDraw} />
    </div>
  );
}
