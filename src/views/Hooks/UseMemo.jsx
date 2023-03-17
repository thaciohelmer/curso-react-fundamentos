import React, { useMemo, useState } from "react";
import SectionHeader from "../../components/layout/section-header/SectionHeader";
import PageHeader from "../../components/layout/page-header/PageHeader";

export default function UseMemo(props) {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  function Sum(a, b) {
    const future = Date.now() + 2000;
    while (Date.now() < future) {}
    return a + b;
  }

  const result = useMemo(() => Sum(n1, n2), [n1, n2]);

  return (
    <div>
      <PageHeader title="Hook UseMemo" subtitle="Returns memorized value" />
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container">
        <input
          type="number"
          className="form-input u-margin-bottom-small "
          valeu={n1}
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="form-input u-margin-bottom-small "
          valeu={n2}
          onChange={(e) => setN2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="form-input u-margin-bottom-small "
          valeu={n3}
          onChange={(e) => setN3(parseInt(e.target.value))}
        />
        <span>Resultado: {result}</span>
      </div>
    </div>
  );
}
