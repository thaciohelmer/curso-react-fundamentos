import React, { useState } from "react";
import PageHeader from "../../components/layout/page-header/PageHeader";
import SectionHeader from "../../components/layout/section-header/SectionHeader";

export default function UseState(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Inicial...");

  return (
    <div>
      <PageHeader
        title="Hook UseState"
        subtitle="Status of functional components"
      ></PageHeader>
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container ">
        <span className="u-font-3 u-margin-bottom-small">{count}</span>
        <div>
          <button
            className="btn btn--plus u-margin-right-small"
            onClick={(e) => setCount(count + 1)}
          >
            <i className="bi bi-plus"></i>
          </button>
          <button
            className="btn btn--minus"
            onClick={(e) => setCount(count - 1)}
          >
            <i className="bi bi-dash"></i>
          </button>
        </div>
      </div>
      <SectionHeader title="Exercise #02" />
      <div className="u-center-container ">
        <input
          type="text"
          className="form-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
    </div>
  );
}
