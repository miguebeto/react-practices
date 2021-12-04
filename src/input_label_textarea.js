import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const Form = () => {
  const [titulo, setTitulo] = useState('');
  const [body, setBody] = useState('');

  const handleChange = (e) => {
    setTitulo(e.target.value);
  };
  return (
    <div>
      <form type="submit">
        <div>
        <label for="titulo">Titulo {titulo}</label>
        <input type="text" id="titulo" onChange={handleChange} />
        </div>
        <div>
        <label for="body">Publicación {body}</label> 
        <textarea id="body" onChange={ e => setBody(e.target.value) }/>
        </div>
        <button onClick={(e) => e.preventDefault()}>agregar</button>
      </form>
      <p>Hola {titulo} 
      <hr/>
      {body}</p>
    </div>
  );
};

const App = () => {
  return <Form />;
};

ReactDOM.render(<App />, document.getElementById('root'));
