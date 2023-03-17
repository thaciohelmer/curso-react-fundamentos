import React from "react";
import PageHeader from "../../components/layout/page-header/PageHeader";
import SectionHeader from "../../components/layout/section-header/SectionHeader";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFatch";

export default function UseCustom(props) {
  const [count, Add, Sub] = useCounter(6);

  const url = "http://files.cod3r.com.br/curso-react/estados.json";

  const response = useFetch(url);

  function ShowStates(states) {
    return states.map(({ nome, sigla }, index) => {
      return (
        <div key={index}>
          {nome} - {sigla}
        </div>
      );
    });
  }

  return (
    <div>
      <PageHeader title="Use CustomHook" subtitle="Create a custom hook" />
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container">
        <span className="u-font-3 u-margin-bottom-small">{count}</span>
        <div>
          <button
            className="btn btn--plus u-margin-right-small"
            onClick={(e) => Add()}
          >
            <i className="bi bi-plus"></i>
          </button>
          <button className="btn btn--minus" onClick={(e) => Sub()}>
            <i className="bi bi-dash"></i>
          </button>
        </div>
      </div>
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container">
        {!response.loading ? ShowStates(response.data) : false}
      </div>
    </div>
  );
}
