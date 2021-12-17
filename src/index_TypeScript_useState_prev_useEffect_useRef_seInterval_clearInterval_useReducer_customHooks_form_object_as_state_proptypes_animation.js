import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Counter } from "./Counter";
import { Counterby } from "./Counterby";
import { CounterEffect } from "./CounterEffect";
import { Usuario } from "./Usuario";
import { TimerPadre } from "./TimerPadre";
import { ContadorRed } from "./ContadorRed";
import { Formulario } from "./Formulario";
import { Formulario2 } from "./Formulario2";

import "./style.css";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter initialValue={15} />
      <br />
      <Counterby initialValue={5} />
      <br />
      <CounterEffect />
      <hr />
      <CounterEffect />
      <hr />
      <br />
      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
      <br />
      <h2>useReducer:</h2>
      <hr />
      <ContadorRed />
      <br />
      <h2>customHooks:</h2>
      <hr />
      <Formulario />
      <br />
      <Formulario2 />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
