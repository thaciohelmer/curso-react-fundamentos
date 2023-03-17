import React, { useContext } from "react";
import PageHeader from "../../components/layout/page-header/PageHeader";

import { DataContext } from "../../data/DataContex";
import SectionHeader from "../../components/layout/section-header/SectionHeader";
import { AppContext } from "../../data/Store";

export default function UseContext(props) {
  const { state } = useContext(DataContext);

  // function SetAge(age) {
  //   setState({ ...state, age });
  // }

  const { cpf, name, last_name, age, setAge } = useContext(AppContext);

  const infos = Object.entries(state).map(([key, value], index) => {
    return (
      <div key={index}>
        <strong>{key}</strong> : {value}
      </div>
    );
  });

  const appContextInfos = Object.entries({ cpf, name, last_name, age }).map(
    ([key, value], index) => {
      return (
        <div key={index}>
          {" "}
          <strong>{key}</strong> : {value}
        </div>
      );
    }
  );

  return (
    <div>
      <PageHeader
        title="Hook UseContext"
        subtitle="Accepts a context object and returns the current context value"
      />
      <div className="u-center-container u-margin-bottom-small">
        <div className="u-display-flex u-gap-2 u-margin-bottom-small">
          {infos}
        </div>
        <div className="u-display-flex u-gap-2">{appContextInfos}</div>
      </div>
      <div className="">
        {/* <button
          className="btn btn--plus"
          onClick={(e) => SetAge(state.age + 1)}
        >
          <i className="bi bi-plus"></i>
        </button> */}

        <SectionHeader title="Exercise #01" />
        <span>{age}</span>
        <div>
          <button className="btn btn--plus" onClick={(e) => setAge(age + 1)}>
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
