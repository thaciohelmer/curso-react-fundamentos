import React from "react";

import "./Content.css";
import { Route, Routes } from "react-router-dom";

import About from "../../../views/examples/About";
import Home from "../../../views/examples/Home";
import Param from "../../../views/examples/Param";
import NotFound from "../../../views/examples/NotFound";
import UseState from "../../../views/Hooks/UseState";
import UseEffect from "../../../views/Hooks/UseEffect";
import UseRef from "../../../views/Hooks/UseRef";
import UseMemo from "../../../views/Hooks/UseMemo";
import UseCallback from "../../../views/Hooks/UseCallback";
import UseContext from "../../../views/Hooks/UseContext";
import UseReducer from "../../../views/Hooks/UseReducer";
import UseCustom from "../../../views/Hooks/UseCustom";

export default function Content(props) {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route path="use-state" element={<UseState />} />
        <Route path="use-effect" element={<UseEffect />} />
        <Route path="use-ref" element={<UseRef />} />
        <Route path="use-memo" element={<UseMemo />} />
        <Route path="use-callback" element={<UseCallback />} />
        <Route path="use-context" element={<UseContext />} />
        <Route path="use-reducer" element={<UseReducer />} />
        <Route path="use-custom" element={<UseCustom />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
