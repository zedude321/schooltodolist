import React, { useState } from "react";

export const ColorButton = ({ borderColor, secondBorder, bg }) => {
  const [selected, setSelected] = useState(false);

  const setHandle = () => {
    setSelected(!selected);
  };

  return (
    <>
      <button
        className={`w-6 h-6 border rounded-full ${
          selected ? "border-white-1" : "border-none"
        } bg-${bg} `}
        onClick={setHandle}
      ></button>
    </>
  );
};
2;
