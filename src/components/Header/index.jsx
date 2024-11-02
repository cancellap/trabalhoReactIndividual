import React from "react";
import * as styles from "./Header.module.css"

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Calculo de IMC</h1>
      </header>
    </div>
  );
}
