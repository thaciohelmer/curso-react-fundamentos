import React, { useReducer } from "react";
import PageHeader from "../../components/layout/page-header/PageHeader";
import SectionHeader from "../../components/layout/section-header/SectionHeader";

import { initialState, Reducer } from "../../store";
import { numberAdd2 } from "../../store/actions/number";

export default function UseReducer(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div>
      <PageHeader
        title="Hook UseReducer"
        subtitle="Another way to have states in components"
      ></PageHeader>
      <SectionHeader title="Exercise #01" />
      {state.user ? (
        <span>{state.user.name}</span>
      ) : (
        <span>User not found</span>
      )}
      <div className="u-center-containe u-margin-bottom-small">
        <span>{state.number}</span>
      </div>
      <div>
        <button
          className="btn u-margin-right-small"
          onClick={(e) => numberAdd2(dispatch)}
        >
          <i className="bi bi-plus"></i>
        </button>
        <button
          className="btn u-margin-right-small"
          onClick={(e) => dispatch({ type: "login", payload: "helmer" })}
        >
          <i className="bi bi-person "></i>
        </button>
        <button
          className="btn u-margin-right-small"
          onClick={(e) => dispatch({ type: "number_mult7" })}
        >
          <i className="bi bi-7-circle"></i>
        </button>
        <button
          className="btn u-margin-right-small"
          onClick={(e) => dispatch({ type: "number_div25" })}
        >
          <i className="bi bi-vr"></i>
        </button>
        <button
          className="btn u-margin-right-small"
          onClick={(e) => dispatch({ type: "number_parse" })}
        >
          <i className="bi bi-emoji-smile"></i>
        </button>
        <button
          className="btn u-margin-right-small"
          onClick={(e) => dispatch({ type: "number_add_value", payload: 6 })}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
}
