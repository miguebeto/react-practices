import React from 'react';
import ReactDOM from 'react-dom';

const nombres = ['Miguel', 'Angel', 'Blanco', 'Castilla'];
const Saludar = ({ nombre, idioma='en' }) => {
  console.log(idioma)
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
        <Saludar nombre="miguel" idioma="es" />
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
