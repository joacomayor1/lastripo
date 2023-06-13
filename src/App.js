import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hola from "./components/hola";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hola />
      </header>
    </div>
  );
}

export default App;
