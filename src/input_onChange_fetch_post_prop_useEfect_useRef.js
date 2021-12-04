import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';

const Form = ({ showed }) => {
  const [titulo, setTitulo] = useState('');
  const [body, setBody] = useState('');

  const firstInput = useRef();

  useEffect(() => {
    if (showed) {
      console.log(firstInput.current);
      firstInput.current.focus();
    }
  }, [showed]);

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
            ref={firstInput}
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

const Acordion = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Mostrar formulario</button>
      <button onClick={() => setShow(false)}>Ocultar formulario</button>
      {show && <Form showed={show} />}
    </div>
  );
};

const App = () => {
  return <Acordion />;
};

ReactDOM.render(<App />, document.getElementById('root'));
