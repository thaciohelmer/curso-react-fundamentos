import React, { useEffect, useState } from "react";
import PageHeader from "../../components/layout/page-header/PageHeader";
import SectionHeader from "../../components/layout/section-header/SectionHeader";

function CalcFactorial(num) {
  const n = parseInt(num);

  if (n < 0) return -1;
  if (n === 0) return 1;

  return CalcFactorial(n - 1) * n;
}

function EvenOrOdd(num) {
  const n = parseInt(num);
  return n % 2 === 0 ? "Even" : "Odd";
}

export default function UseEffect(props) {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);
  const [numberTwo, setNumberTwo] = useState(1);
  const [status, setStatus] = useState("Odd");

  useEffect(() => setFactorial(CalcFactorial(number)), [number]);
  useEffect(() => setStatus(EvenOrOdd(numberTwo)), [numberTwo]);

  return (
    <div>
      <PageHeader
        title="Hook UseEffect"
        subtitle="Lets you run side effects on components"
      />
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container">
        <div className="u-font-3 u-margin-bottom-small">
          <span className="u-margin-right-small">Fatorial:</span>
          <span className="u-text-red">{factorial}</span>
        </div>
        <input
          type="number"
          className="form-input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionHeader title="Exercise #02" />
      <div className="u-center-container">
        <div className="u-font-3 u-margin-bottom-small">
          <span className="u-margin-right-small">Status: </span>
          <span className="u-text-red">{status}</span>
        </div>
        <input
          type="number"
          className="form-input"
          value={numberTwo}
          onChange={(e) => setNumberTwo(e.target.value)}
        />
      </div>
    </div>
  );
}
