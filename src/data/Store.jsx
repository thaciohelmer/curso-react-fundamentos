import React, { useState } from "react";

const initialState = {
  cpf: 18351728730,
  name: "Thacio Vitor",
  last_name: "Netto",
  age: 23,
};

export const AppContext = React.createContext(initialState);

export default function Store(props) {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setAge: (age) => updateState("age", age),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
