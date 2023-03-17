import React from "react";

import "./Menu.css";
import routes from "../../../Routes";

import MenuItem from "./MenuItem";

export default function Menu(props) {
  return (
    <aside className="menu">
      <nav>
        <ul className="menu__items">
          {routes
            .filter((e) => e.active)
            .map((route, index) => {
              return <MenuItem {...route} key={index} />;
            })}
        </ul>
      </nav>
    </aside>
  );
}
