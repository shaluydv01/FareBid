import React from "react";
import "./button.css";

const button = ({ name }) => {
  return (
    <>
      <button
        id="Button"
        className="bg-danger rounded-1 border-0 fs-5 px-3 py-1 text-white"
      >
        {name}
      </button>
    </>
  );
};

export default button;
