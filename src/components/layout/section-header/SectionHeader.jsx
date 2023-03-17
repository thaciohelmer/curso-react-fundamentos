import React from "react";

import "./SectionHeader.css";

export default function SectionHeader(props) {
  const { title } = props;
  return (
    <div className="section-header">
      <h3 className="section-header__title">{title}</h3>
    </div>
  );
}
