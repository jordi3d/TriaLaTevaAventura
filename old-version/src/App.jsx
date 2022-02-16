import "./estils.css";
import Linies from "./Linies";
import Caixes from "./Caixes";

export default function App() {
  return (
    <>
      <div className="App">
        <div id="diagrama-flux" style="position: absolute; top: 0px; left: 0px">
          <Linies />
          <Caixes />
        </div>
      </div>
    </>
  );
}
