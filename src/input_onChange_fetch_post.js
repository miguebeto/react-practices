import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Form = () => {
  const [titulo, setTitulo] = useState('');
  const [body, setBody] = useState('');

  const sentForm = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTitulo('');
        setBody('');
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => sentForm(e)}>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input
            value={titulo}
            type="text"
            id="titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Publicación</label>
          <textarea
            value={body}
            id="body"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button>Enviar</button>
      </form>
      <p>
        Hola {titulo}
        <hr />
        {body}
      </p>
    </div>
  );
};

const App = () => {
  return <Form />;
};

ReactDOM.render(<App />, document.getElementById('root'));
