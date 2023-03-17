import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/layout/page-header/PageHeader";
import SectionHeader from "../../components/layout/section-header/SectionHeader";

function Merge(s1, s2) {
  return [...s1]
    .map(function (e, i) {
      return e + (s2[i] || "");
    })
    .join("");
}

export default function UseRef(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(() => {
    count.current += 1;
    myInput2.current.focus();
  }, [value1]);

  useEffect(() => {
    count.current += 1;
    myInput1.current.focus();
  }, [value2]);

  return (
    <div>
      <PageHeader
        title="Hook UseRef"
        subtitle="Returns a mutable object with the .current property"
      />
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container">
        <div className="u-font-3 u-margin-bottom-small">
          <span>Value :</span>
          <span>{Merge(value1, value2)} </span>
          <span className="u-text-red">[{count.current}]</span>
        </div>
        <input
          type="text"
          className="form-input"
          ref={myInput1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container">
        <input
          type="text"
          className="form-input"
          ref={myInput2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
}
