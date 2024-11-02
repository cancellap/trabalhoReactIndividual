import React, { useContext, useState } from "react";
import * as styles from "./Input.module.css";
import { ImcContext } from "../../context/imc";
import Resultado from "../Resultado/resultado";

export default function Input() {
  const { peso, setPeso, altura, setAltura } = useContext(ImcContext);
  const [imc, setImc] = useState(0);
  const [classificacao, setClassificacao] = useState(0);

  function inserir(e) {
    e.preventDefault();

    if (!peso || peso <= 0 || !altura || altura <= 0) {
      console.log("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    calcularIMC();

    console.log(`IMC: ${imc}, Classificação: ${classificacao}`);
  }

  function calcularIMC() {
    const alturaEmMetros = altura > 3 ? altura / 100 : altura;
    const imc = peso / alturaEmMetros ** 2;
    let classificacao;

    if (imc < 18.5) classificacao = "baixo peso";
    else if (imc < 25) classificacao = "eutrofia (peso adequado)";
    else if (imc < 30) classificacao = "sobrepeso";
    else if (imc < 35) classificacao = "obesidade grau 1";
    else if (imc < 40) classificacao = "obesidade grau 2";
    else classificacao = "obesidade extrema";
    setImc(imc);
    setClassificacao(classificacao);
    console.log(imc, classificacao);
  }

  return (
    <div>
      <form onSubmit={inserir} className={styles.form}>
        <label>Peso:</label>
        <input
          type="text"
          placeholder="Digite seu peso"
          name="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <label>Altura:</label>
        <input
          type="text"
          placeholder="Digite sua altura em metros"
          name="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>
      <Resultado imc={imc} classificao={classificacao} />
    </div>
  );
}
