import React from "react";
import "./styles.css";

export const Card = ({ url = "", name, price }) => {
  return (
    <div className="card">
      <img src={url} alt="product" width={200} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={""}>Buy</button>
    </div>
  );
};
