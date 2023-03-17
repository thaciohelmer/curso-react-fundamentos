import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem(props) {
  const { name, path, icon } = props;
  return (
    <li className="menu__item">
      <Link to={path} className="menu__link">
        <i className={icon + " menu__icon"}></i>
        <span className="menu__text">{name}</span>
      </Link>
    </li>
  );
}
