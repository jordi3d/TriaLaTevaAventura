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

export default function Caixes({ setDraw }) {
  const [actualEstat, setEstat] = useState("funciona");
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);
  const [flag7, setFlag7] = useState(false);
  const [flag8, setFlag8] = useState(false);
  const [flag9, setFlag9] = useState(false);
  const [flag10, setFlag10] = useState(false);
  const [flag11, setFlag11] = useState(false);

  function estat(nouestat) {
    setEstat(nouestat);
  }
  function desactivar_anim(iden, iden2) {
    let element01 = document.getElementById(iden);
    element01.style.animationName = "no";
    element01.style.animationDuration = "0s";
    element01.style.animationIterationCount = "1";
    element01.removeAttribute("animationName");
    element01.style.backgroundColor = "green";
    element01.style.cursor = "default";
    //element01.onClick = null;
    //element01.onclick = null;
    //element01.removeAttribute("onclick");
    if (iden2) {
      //és una pregunta
      let element02 = document.getElementById(iden2);
      element02.classList.add("gray");
      //element02.style.backgroundColor = "gray";
      let element03 = document.getElementById(iden + "SI");
      element03.style.cursor = "default";
      element03.onClick = "";
      element03.removeAttribute("onClick");
      element03.onclick = "";
      let element04 = document.getElementById(iden + "NO");
      element04.style.cursor = "default";
      element04.onClick = "";
      element04.removeAttribute("onclick");
      element04.onclick = "";
    }
  }
  function activar_anim(iden) {
    let element01 = document.getElementById(iden);
    element01.style.animationName = "example";
    element01.style.animationDuration = "2s";
    element01.style.animationIterationCount = "infinite";
  }

  function actualitza(vamos) {
    switch (vamos) {
      case "funciona":
        break;
      case "funcionaSI":
        estat("funcionaSI");
        caminet.push("funcionaSI");
        let animacio1 = document.getElementById("funcionaSI");
        animacio1.classList.remove("sino");
        animacio1.classList.add("verd");
        setDraw("f-nht");
        desactivar_anim("funciona", "funcionaNO");
        setFlag1(false);
        estat("nht");
        caminet.push("nht");
        let elem1 = document.getElementById("nht_l");
        elem1.classList.add("br");
        activar_anim("nht");
        setFlag2(true);
        break;
      case "funcionaNO":
        estat("funcionaNO");
        caminet.push("funcionaNO");
        let animacio2 = document.getElementById("funcionaNO");
        animacio2.classList.remove("sino");
        animacio2.classList.add("verd");
        setDraw("f-hht");
        desactivar_anim("funciona", "funcionaSI");
        setFlag1(false);
        estat("hht");
        caminet.push("hht");
        let elem2 = document.getElementById("hht_l");
        elem2.classList.add("br");
        activar_anim("hht");
        setFlag3(true);
        break;
      case "nht":
        desactivar_anim("nht");
        setFlag2(false);
        estat("hsa");
        caminet.push("hsa");
        let elem3 = document.getElementById("hsa_l");
        elem3.classList.add("br");
        activar_anim("hsa");
        setFlag6(true);
        break;
      case "hht":
        break;
      case "hhtSI":
        desactivar_anim("hht", "hhtNO");
        setFlag3(false);
        estat("hhtSI");
        caminet.push("hhtSI");
        let animacio3 = document.getElementById("hhtSI");
        animacio3.classList.remove("sino");
        animacio3.classList.add("verd");
        setDraw("hht-b");
        estat("burro");
        caminet.push("burro");
        let elem4 = document.getElementById("b_l");
        elem4.classList.add("br");
        activar_anim("burro");
        setFlag4(true);
        break;
      case "burro":
        desactivar_anim("burro");
        setFlag4(false);
        estat("lhc");
        caminet.push("lhc");
        let elem5 = document.getElementById("lhc_l");
        elem5.classList.add("br");
        activar_anim("lhc");
        setFlag5(true);
        break;
      case "hhtNO":
        desactivar_anim("hht", "hhtSI");
        setFlag3(false);
        estat("hhtNO");
        caminet.push("hhtNO");
        let animacio4 = document.getElementById("hhtNO");
        animacio4.classList.remove("sino");
        animacio4.classList.add("verd");
        setDraw("hht-edp");
        estat("edp");
        caminet.push("edp");
        let elem6 = document.getElementById("edp_l");
        elem6.classList.add("br");
        activar_anim("edp");
        setFlag8(true);
        break;
      case "edp":
        break;
      case "edpSI":
        desactivar_anim("edp", "edpNO");
        setFlag8(false);
        estat("edpSI");
        caminet.push("edpSI");
        let animacio5 = document.getElementById("edpSI");
        animacio5.classList.remove("sino");
        animacio5.classList.add("verd");
        setDraw("edpSI-lhc");
        estat("lhc");
        caminet.push("lhc");
        let elem7 = document.getElementById("lhc_l");
        elem7.classList.add("br");
        activar_anim("lhc");
        setFlag5(true);
        break;
      case "edpNO":
        desactivar_anim("edp", "edpSI");
        setFlag8(false);
        estat("edpNO");
        caminet.push("edpNO");
        let animacio6 = document.getElementById("edpNO");
        animacio6.classList.remove("sino");
        animacio6.classList.add("verd");
        setDraw("edpNO-ah");
        estat("ah");
        caminet.push("ah");
        let elem8 = document.getElementById("ah_l");
        elem8.classList.add("br");
        activar_anim("ah");
        setFlag7(true);
        break;
      case "hsa":
        break;
      case "hsaSI":
        desactivar_anim("hsa", "hsaNO");
        setFlag6(false);
        estat("hsaSI");
        caminet.push("hsaSI");
        let animacio7 = document.getElementById("hsaSI");
        animacio7.classList.remove("sino");
        animacio7.classList.add("verd");
        setDraw("hsaSI-lhc");
        estat("lhc");
        caminet.push("lhc");
        let elem9 = document.getElementById("lhc_l");
        elem9.classList.add("br");
        activar_anim("lhc");
        setFlag5(true);
        break;
      case "hsaNO":
        desactivar_anim("hsa", "hsaSI");
        setFlag6(false);
        estat("hsaNO");
        caminet.push("hsaNO");
        let animacio8 = document.getElementById("hsaNO");
        animacio8.classList.remove("sino");
        animacio8.classList.add("verd");
        setDraw("hsaNO-lh");
        estat("lh");
        caminet.push("lh");
        let elem10 = document.getElementById("lh_l");
        elem10.classList.add("br");
        activar_anim("lh");
        setFlag10(true);
        break;
      case "lhc":
        desactivar_anim("lhc");
        if (flag5) setFlag5(false);
        else setFlag5(true);
        estat("pcaa");
        caminet.push("pcaa");
        /* potser ja hem passat?*/
        let elem11 = document.getElementById("pcaa_l");
        elem11.classList.add("br");
        activar_anim("pcaa");
        setFlag9(true);
        let animacio11 = document.getElementById("pcaaNO");
        animacio11.classList.remove("verd");
        animacio11.classList.add("sino");
        animacio11 = document.getElementById("pcaaSI");
        animacio11.classList.remove("verd");
        animacio11.classList.remove("gray");
        animacio11.classList.add("sino");
        break;
      case "pcaa":
        break;
      case "pcaaSI":
        desactivar_anim("pcaa", "pcaaNO");
        setFlag9(false);
        estat("pcaaSI");
        caminet.push("pcaaSI");
        let animacio9 = document.getElementById("pcaaSI");
        animacio9.classList.remove("sino");
        animacio9.classList.add("verd");
        setDraw("pcaaSI-np");
        estat("np");
        caminet.push("np");
        let elem12 = document.getElementById("np_l");
        elem12.classList.add("br");
        activar_anim("np");
        setFlag11(true);
        break;
      case "pcaaNO":
        desactivar_anim("pcaa", "pcaaSI");
        setFlag9(false);
        estat("pcaaNO");
        caminet.push("pcaaNO");
        let animacio10 = document.getElementById("pcaaNO");
        animacio10.classList.remove("sino");
        animacio10.classList.add("verd");
        setDraw("pcaaNO-lhc");
        estat("lhc");
        caminet.push("lhc");
        /* potser ja hem passat?*/
        let elem13 = document.getElementById("lhc_l");
        elem13.classList.add("br");
        activar_anim("lhc");
        setFlag5(true);
        break;
      case "ah":
        desactivar_anim("ah");
        setFlag7(false);
        estat("np");
        caminet.push("np");
        let elem14 = document.getElementById("np_l");
        elem14.classList.add("br");
        activar_anim("np");
        setFlag11(true);
        break;
      case "lh":
        desactivar_anim("lh");
        setFlag10(false);
        estat("np");
        caminet.push("np");
        let elem15 = document.getElementById("np_l");
        elem15.classList.add("br");
        activar_anim("np");
        setFlag11(true);
        break;
      case "np":
        desactivar_anim("np");
        setFlag11(false);
        estat("final");
        caminet.push("final");
        break;
      case "final":
        break;
      default:
        break;
    }
    console.log(caminet);
  }

  return (
    <div id="caixes">
      <div className="pastilla">
        <div
          id="funcionaSI"
          className="sino"
          onClick={flag1 ? () => actualitza("funcionaSI") : null}
        >
          SI
        </div>
        <div
          id="funcionaNO"
          className="sino"
          onClick={flag1 ? () => actualitza("funcionaNO") : null}
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
        <div
          id="nht"
          className="quadrat"
          onClick={flag2 ? () => actualitza("nht") : null}
        ></div>
      </div>
      <div className="pastilla">
        <div
          id="hhtSI"
          className="sino"
          onClick={flag3 ? () => actualitza("hhtSI") : null}
        >
          SI
        </div>
        <div
          id="hhtNO"
          className="sino"
          onClick={flag3 ? () => actualitza("hhtNO") : null}
        >
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
        <div
          id="burro"
          className="quadrat"
          onClick={flag4 ? () => actualitza("burro") : null}
        ></div>
      </div>
      <div className="pastilla">
        <div id="lhc_l" className="etiqueta">
          L'HAS
          <br /> CAGAT!
        </div>
        <div
          id="lhc"
          className="quadrat"
          onClick={flag5 ? () => actualitza("lhc") : null}
        ></div>
      </div>
      <div className="pastilla">
        <div
          id="hsaSI"
          className="sino"
          onClick={flag6 ? () => actualitza("hsaSI") : null}
        >
          SI
        </div>
        <div
          id="hsaNO"
          className="sino"
          onClick={flag6 ? () => actualitza("hsaNO") : null}
        >
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
        <div
          id="ah"
          className="quadrat"
          onClick={flag7 ? () => actualitza("ah") : null}
        ></div>
      </div>
      <div className="pastilla">
        <div
          id="edpSI"
          className="sino"
          onClick={flag8 ? () => actualitza("edpSI") : null}
        >
          SI
        </div>
        <div
          id="edpNO"
          className="sino"
          onClick={flag8 ? () => actualitza("edpNO") : null}
        >
          NO
        </div>
        <div id="edp_l" className="etiqueta2">
          ET DONAR&Agrave;
          <br /> PROBLEMES?
        </div>
        <div id="edp" className="rombo"></div>
      </div>
      <div className="pastilla">
        <div
          id="pcaaSI"
          className="sino"
          onClick={flag9 ? () => actualitza("pcaaSI") : null}
        >
          SI
        </div>
        <div
          id="pcaaNO"
          className="sino"
          onClick={flag9 ? () => actualitza("pcaaNO") : null}
        >
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
        <div
          id="lh"
          className="quadrat"
          onClick={flag10 ? () => actualitza("lh") : null}
        ></div>
      </div>
      <div className="pastilla">
        <div id="np_l" className="etiqueta">
          CAP PROBLEMA!
        </div>
        <div
          id="np"
          className="quadrat"
          onClick={flag11 ? () => actualitza("np") : null}
        ></div>
      </div>
    </div>
  );
}
