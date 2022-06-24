import React, { createContext, useState } from "react";
import GeneralEditInputs from "../components/DynamicComponents/generalEditInputs";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [modalState, setModalState] = useState([]);
  return (
    <MyContext.Provider
      value={{
       
      }}
    >
      {children}
    </MyContext.Provider>
  );
}