import React from "react";
const Pet = ({ name, animal, food }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{food}</h3>
    </div>
  );
};

export default Pet;
