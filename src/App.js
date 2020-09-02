import React from "react";
import "./App.css";
import { Pet } from "./Pet";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Pet name="Julie" animal="Dog" food="Bread" />
      <Pet name="Anne" animal="Cat" food="Pan" />
      <Pet name="Rocky" animal="Bird" food="Zeroti" />
    </div>
  );
}

export default App;
