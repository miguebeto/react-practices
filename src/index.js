import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Button = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Presionado {counter}</p>
      <button onClick={()=> setCounter(counter + 1)}>Click Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Button />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));