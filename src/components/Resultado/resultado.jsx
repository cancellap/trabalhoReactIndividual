import React from "react";
import * as styleResultado from "./Resultado.module.css";

export default function Resultado({ imc, classificao }) {
  
  if (imc === null || imc === 0) {
    return null; 
  }
  return (
    <div className={styleResultado.box}>
      <p className={styleResultado.out}>
        <b>Seu IMC:</b> {imc.toFixed(2)}
      </p>
      <p className={styleResultado.out}>
        <b>Sua classificação:</b> {classificao}
      </p>
    </div>
  );
}
