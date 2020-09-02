import React from "react";
export function Pet({ name, animal, food }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{food}</h3>
    </div>
  );
}
