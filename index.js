import React from "react";

export const Button = React.memo(({ onClick, label, n }) => {
  return (
    <button
      className="btn btn-primary mt-3"
      onClick={() => onClick(n)}
      type="foo"
    >
      {label}
    </button>
  );
});
