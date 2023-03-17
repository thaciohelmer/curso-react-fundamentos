import React, { useCallback, useState } from "react";
import PageHeader from "../../components/layout/page-header/PageHeader";
import SectionHeader from "../../components/layout/section-header/SectionHeader";
import UseCallbackButtons from "../../components/UseCallbackButtons";

export default function UseCallback(params) {
  const [count, setCount] = useState(0);

  const Add = useCallback(
    function (delta) {
      setCount((curr) => curr + delta);
    },
    [setCount]
  );

  return (
    <div>
      <PageHeader
        title="Hook UseCallback"
        subtitle="Returns a memorized function"
      />
      <SectionHeader title="Exercise #01" />
      <div className="u-center-container">
        <span className="u-font-3 u-margin-bottom-small">{count}</span>
        <div>
          <UseCallbackButtons Add={Add} />
        </div>
      </div>
    </div>
  );
}
