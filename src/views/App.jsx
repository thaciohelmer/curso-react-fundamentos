import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { DataContext, data } from "../data/DataContex";

import "./App.css";

import Menu from "../components/layout/menu/Menu";
import Content from "../components/layout/content/Content";
import Store from "../data/Store";

export default function App(props) {
  const [state, setState] = useState(data);

  return (
    <Store>
      <DataContext.Provider value={{ state, setState }}>
        <div className="app">
          <BrowserRouter>
            <Menu />
            <Content />
          </BrowserRouter>
        </div>
      </DataContext.Provider>
    </Store>
  );
}
