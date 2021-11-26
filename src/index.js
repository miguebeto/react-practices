import React from 'react';
import ReactDOM from 'react-dom';

const nombres = ['Miguel', 'Angel', 'Blanco', 'Castilla'];
const Saludar = ({ nombre, idioma }) => {
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <p>
      {saludo}, {nombre}
    </p>
  );
};

const App = () => {
  return (
    <>
      <div>
        <Saludar nombre="miguel" idioma="en" />
      </div>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
