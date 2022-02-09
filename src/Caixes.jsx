import { useState } from "react";

export default function Caixes() {
  return (
    <>
      <div stlye="z-index: 1;">
        <div class="sino" style="left: 188px; top: 57px">
          SI
        </div>
        <div class="sino" style="left: 377px; top: 57px">
          NO
        </div>
        <div
          class="br etiqueta"
          style="position: absolute; left: 244px; top: 71px"
        >
          FUNCIONA?
        </div>
        <div id="funciona" class="rombo"></div>
      </div>
      <div stlye="z-index: 1;">
        <div
          id="nhtt"
          class="etiqueta"
          style="position: absolute; left: 95px; top: 148px"
        >
          NO HO
          <br /> TOQUIS!
        </div>
        <div id="nht" class="quadrat"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="sino" style="left: 374px; top: 137px">
          SI
        </div>
        <div class="sino" style="left: 487px; top: 217px">
          NO
        </div>
        <div class="etiqueta" style="left: 448px; top: 142px">
          HO HAS
          <br /> TOCAT?
        </div>
        <div id="hht" class="rombo"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="etiqueta" style="left: 260px; top: 210px">
          BURRO!
        </div>
        <div id="burro" class="quadrat"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="etiqueta" style="left: 262px; top: 331px">
          L'HAS
          <br /> CAGAT!
        </div>
        <div id="lhc" class="quadrat"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="sino" style="left: 187px; top: 254px">
          SI
        </div>
        <div class="sino" style="left: 95px; top: 348px">
          NO
        </div>
        <div class="etiqueta" style="left: 94px; top: 262px">
          HO SAP
          <br /> ALG&Uacute;?
        </div>
        <div id="hsa" class="rombo"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="etiqueta" style="left: 75px; top: 407px">
          AMAGA-HO!
        </div>
        <div id="ah" class="quadrat"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="sino" style="left: 374px; top: 292px">
          SI
        </div>
        <div class="sino" style="left: 487px; top: 411px">
          NO
        </div>
        <div class="etiqueta" style="left: 427px; top: 296px">
          ET DONAR&Agrave;
          <br /> PROBLEMES?
        </div>
        <div id="edp" class="rombo"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="sino" style="left: 269px; top: 546px">
          SI
        </div>
        <div class="sino" style="left: 205px; top: 478px">
          NO
        </div>
        <div class="etiqueta" style="left: 257px; top: 432px">
          POTS
          <br /> CULPAR <br /> ALG&Uacute; <br /> ALTRE?
        </div>
        <div id="pcaa" class="rombo"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="etiqueta" style="left: 431px; top: 492px">
          LLENÇA-HO!
        </div>
        <div id="lh" class="quadrat"></div>
      </div>
      <div stlye="z-index: 1;">
        <div class="etiqueta" style="left: 226px; top: 604px">
          CAP PROBLEMA!
        </div>
        <div id="np" class="quadrat"></div>
      </div>
    </>
  );
}
