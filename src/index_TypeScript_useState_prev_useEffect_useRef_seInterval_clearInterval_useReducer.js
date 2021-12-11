import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Counter } from './Counter';
import { Usuario } from './Usuario';
import { TimerPadre } from './TimerPadre';
import { ContadorRed } from './ContadorRed';

import './style.css';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
      <br/>
      <h2>useReducer:</h2>
      <hr />
      <ContadorRed />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
