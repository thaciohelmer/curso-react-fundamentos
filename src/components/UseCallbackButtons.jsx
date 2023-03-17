import React from "react";

function UseCallbackButtons(props) {
  const { Add } = props;
  console.log("render ...");
  return (
    <div>
      <button
        className="btn btn--plus u-margin-right-small"
        onClick={(e) => Add(6)}
      >
        + 6
      </button>
      <button
        className="btn btn--plus u-margin-right-small"
        onClick={(e) => Add(12)}
      >
        + 12
      </button>
      <button
        className="btn btn--plus u-margin-right-small"
        onClick={(e) => Add(18)}
      >
        + 18
      </button>
    </div>
  );
}

export default React.memo(UseCallbackButtons);
