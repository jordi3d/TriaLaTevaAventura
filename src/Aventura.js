import Linies from "./Linies";
import Caixes from "./Caixes";
import { useState } from "react";

export default function Aventura() {
  const [draw, setDraw] = useState(false);
  return (
    <div className="App">
      <Linies draw={draw} />
      <Caixes setDraw={setDraw} />
    </div>
  );
}
