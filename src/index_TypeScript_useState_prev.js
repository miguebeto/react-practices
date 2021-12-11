import React from 'react';
import { Counter } from './Counter';
import { Usuario } from './Usuario';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
