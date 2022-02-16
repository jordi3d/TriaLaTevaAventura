import "./linies.css";

export default function Linies({ draw }) {
  return (
    <svg id="espai">
      <polyline points="232,81 126,81 126,141" />
      <polyline points="348,81 480,81 480,110" />
      <circle id="p1" r="5" cx="285" cy="81" fill="red">
        {draw === "f-nht" && (
          <animateMotion
            dur="4.0s"
            fill="freeze"
            path="M0,0c-83,0,-103,0,-159,0c0,10,0,10,0,10c0,0,0,35,0,71"
          ></animateMotion>
        )}
        {draw === "f-hht" && (
          <animateMotion
            dur="4.0s"
            fill="freeze"
            path="M0,0c83,0,148,0,195,0c0,10,0,10,0,10c0,0,0,35,0,71"
          ></animateMotion>
        )}
      </circle>
      <polyline points="291,196 291,162 427,162" />
      <polyline points="480,212 480,242" />
      <circle id="p2" r="5" cx="480" cy="162" fill="red">
        {draw === "hht-b" && (
          <animateMotion
            dur="4.0s"
            fill="freeze"
            path="M0,0c0,0,-45,0,-189,0c0,10,0,10,0,10c0,0,0,24,0,48"
          ></animateMotion>
        )}
        {draw === "hht-edp" && (
          <animateMotion
            dur="4.0s"
            fill="freeze"
            path="M0,0c0,0,0,12,0,50c0,0,0,0,0,50c0,0,0,0,0,53"
          ></animateMotion>
        )}
      </circle>
      <polyline points="126,191 126,228" />
      <polyline points="291,242 291,326" />
      <polyline points="170,281 280,281 280,326" />
      <polyline points="126,331 126,392" />
      <polyline points="301,326 301,315 427,315" />
      <polyline points="480,389 480,477" />
      <polyline points="291,373 291,414" />
      <polyline points="291,531 291,589" />
      <polyline points="260,350 190,350 190,474 231,474" />
      <polyline points="126,439 126,614 214,614" />
      <polyline points="364,614 480,614 480,524" />
    </svg>
  );
}
