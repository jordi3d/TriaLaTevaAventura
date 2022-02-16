import "./caixes.css";
import { useState } from "react";

let caminet = ["funciona"];

/*
document.addEventListener("keydown", Tecla);

function Tecla(event) {
  resposta = event.code;

  if (resposta !== "KeyS" && resposta !== "KeyN") {
    setTimeout(() => {
      console.log("Polsa s/n");
    }, 50);
  } else {
    console.log("Has dit %s", resposta === "KeyS" ? "SI" : "NO");
    Actualitza();
  }
}
*/

export default function Caixes() {
  const [actualEstat, setEstat] = useState("funciona");

  function estat(nouestat) {
    let estatFinal = actualEstat;
    if (nouestat) {
      estatFinal = nouestat;
      setEstat(nouestat);
      caminet.push(nouestat);
      console.log(
        "Estat actual a estat() val: %s nouestat val: %s",
        actualEstat,
        nouestat
      );
    }
    setEstat(estatFinal);
    console.log("Crida a estat i li passo: %s", nouestat);
    console.log(caminet);
    return actualEstat;
  }
  function actualitza(resposta) {
    let estatActual = estat();
    console.log("Estat actual a actualitza() val: %s", estatActual);
    switch (estatActual) {
      case "funciona":
        console.log("Funciona %s", resposta);
        if (resposta === "KeyS") {
          estat("funcionaSI");
          let animacio = document.getElementById("funcionaSI");
          animacio.classList.remove("sino");
          animacio.classList.add("verd");
          let anim = document.getElementById("p1");
          console.log("no fer clickable el funcionaSI");
          anim.innerHTML = `
            <animateMotion
              dur="4.0s"
              fill="freeze"
              path="M0,0c-83,0,-103,0,-159,0c0,10,0,10,0,10c0,0,0,35,0,71"
            ></animateMotion>`;
        } else if (resposta === "KeyN") {
          estat("funcionaNO");
          let animacio = document.getElementById("funcionaNO");
          animacio.classList.remove("sino");
          animacio.classList.add("verd");
          let anim = document.getElementById("p1");
          console.log("no fer clickable el funcionaNO");
          anim.innerHTML = `<animateMotion
          dur="3.5s"
          fill="freeze" path="M0,0c83,0,148,0,195,0c0,10,0,10,0,10c0,0,0,35,0,71"
          ></animateMotion>`;
        } else {
          resposta = "KeyX";
          console.log("Buclito");
          break;
        }
        console.log("Desactivar color de Funciona");
        resposta = "KeyX";
        actualitza("KeyX");
        break;
      case "funcionaSI":
        estat("nht");
        break;
      case "funcionaNO":
        estat("hht");
        break;
      case "nht":
        console.log("No Ho Toquis");
        console.log("Canviar estil de nht");
        console.log("fer un petit delay i seguir");
        estat("hsa");
        actualitza("KeyX");
        break;
      case "hht":
        if (resposta === "KeyS") {
          estat("hhtSI");
          caminet.push("hhtSI");
        } else if (resposta === "KeyN") {
          estat("hhtNO");
          caminet.push("hhtNO");
        }
        break;
      case "hhtSI":
        estat("burro");
        caminet.push("burro");
        break;
      case "burro":
        estat("lhc");
        caminet.push("lhc");
        break;
      case "hhtNO":
        estat("edp");
        caminet.push("edp");
        break;
      case "edp":
        if (resposta === "KeyS") {
          estat("edpSI");
          caminet.push("edpSI");
        } else if (resposta === "KeyN") {
          estat("edpNO");
          caminet.push("edpNO");
        }
        break;
      case "edpSI":
        estat("lhc");
        caminet.push("lhc");
        break;
      case "edpNO":
        estat("lh");
        caminet.push("lh");
        break;
      case "hsa":
        if (resposta === "KeyS") {
          estat("hsaSI");
          caminet.push("hsaSI");
        } else if (resposta === "KeyN") {
          estat("hsaNO");
          caminet.push("hsaNO");
        }
        break;
      case "hsaSI":
        estat("lhc");
        caminet.push("lhc");
        break;
      case "hsaNO":
        estat("ah");
        caminet.push("ah");
        break;
      case "lhc":
        estat("pcaa");
        caminet.push("pcaa");
        break;
      case "pcaa":
        if (resposta === "KeyS") {
          estat("pcaaSI");
          caminet.push("pcaaSI");
        } else if (resposta === "KeyN") {
          estat("pcaaNO");
          caminet.push("pcaaNO");
        }
        break;
      case "pcaaSI":
        estat("np");
        caminet.push("np");
        break;
      case "pcaaNO":
        estat("lhc");
        caminet.push("lhc");
        break;
      case "ah":
        estat("np");
        caminet.push("np");
        break;
      case "lh":
        estat("np");
        caminet.push("np");
        break;
      case "np":
        estat("final");
        caminet.push("final");
        break;
      case "final":
        break;
      default:
        break;
    }
  }

  return (
    <div id="caixes">
      <div className="pastilla">
        <div
          id="funcionaSI"
          className="sino"
          onClick={() => actualitza("KeyS")}
        >
          SI
        </div>
        <div
          id="funcionaNO"
          className="sino"
          onClick={() => actualitza("KeyN")}
        >
          NO
        </div>
        <div id="funciona_l" className="br etiqueta2">
          FUNCIONA?
        </div>
        <div id="funciona" className="rombo"></div>
      </div>
      <div className="pastilla">
        <div id="nht_l" className="etiqueta">
          NO HO
          <br /> TOQUIS!
        </div>
        <div id="nht" className="quadrat"></div>
      </div>
      <div className="pastilla">
        <div id="hhtSI" className="sino">
          SI
        </div>
        <div id="hhtNO" className="sino">
          NO
        </div>
        <div id="hht_l" className="etiqueta2">
          HO HAS
          <br /> TOCAT?
        </div>
        <div id="hht" className="rombo"></div>
      </div>
      <div className="pastilla">
        <div id="b_l" className="etiqueta">
          BURRO!
        </div>
        <div id="burro" className="quadrat"></div>
      </div>
      <div className="pastilla">
        <div id="lhc_l" className="etiqueta">
          L'HAS
          <br /> CAGAT!
        </div>
        <div id="lhc" className="quadrat"></div>
      </div>
      <div className="pastilla">
        <div id="hsaSI" className="sino">
          SI
        </div>
        <div id="hsaNO" className="sino">
          NO
        </div>
        <div id="hsa_l" className="etiqueta2">
          HO SAP
          <br /> ALG&Uacute;?
        </div>
        <div id="hsa" className="rombo"></div>
      </div>
      <div className="pastilla">
        <div id="ah_l" className="etiqueta">
          AMAGA-HO!
        </div>
        <div id="ah" className="quadrat"></div>
      </div>
      <div className="pastilla">
        <div id="edpSI" className="sino">
          SI
        </div>
        <div id="edpNO" className="sino">
          NO
        </div>
        <div id="edp_l" className="etiqueta2">
          ET DONAR&Agrave;
          <br /> PROBLEMES?
        </div>
        <div id="edp" className="rombo"></div>
      </div>
      <div className="pastilla">
        <div id="pcaaSI" className="sino">
          SI
        </div>
        <div id="pcaaNO" className="sino">
          NO
        </div>
        <div id="pcaa_l" className="etiqueta2">
          POTS
          <br /> CULPAR <br /> ALG&Uacute; <br /> ALTRE?
        </div>
        <div id="pcaa" className="rombo"></div>
      </div>
      <div className="pastilla">
        <div id="lh_l" className="etiqueta">
          LLENÇA-HO!
        </div>
        <div id="lh" className="quadrat"></div>
      </div>
      <div className="pastilla">
        <div id="np_l" className="etiqueta">
          CAP PROBLEMA!
        </div>
        <div id="np" className="quadrat"></div>
      </div>
    </div>
  );
}
