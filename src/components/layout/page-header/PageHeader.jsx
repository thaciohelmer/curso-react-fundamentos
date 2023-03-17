import React from "react";

import "./PageHeader.css";

export default function PageHeader(props) {
  const { title, subtitle } = props;

  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      <p className="page-header__subtitle">{subtitle}</p>
    </div>
  );
}
