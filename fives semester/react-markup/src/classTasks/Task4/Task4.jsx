import React from "react";
export const Task4 = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>{color.name}</li>
      ))}
    </ul>
  );
};
