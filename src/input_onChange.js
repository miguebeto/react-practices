import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const Saludo = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form type="submit">
        <input type="text" onChange={handleChange} />
        <button onClick={(e) => e.preventDefault()}>agregar</button>
      </form>
      <p>Hola {name}</p>
    </div>
  );
};

const App = () => {
  return <Saludo />;
};

ReactDOM.render(<App />, document.getElementById('root'));
