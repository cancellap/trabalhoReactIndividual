import React, { createContext, useState } from "react";

export const ImcContext = createContext();

export function ImcProvider({ children }) {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  return (
    <ImcContext.Provider value={{ peso, setPeso, altura, setAltura }}>
      {children}
    </ImcContext.Provider>
  );
}
