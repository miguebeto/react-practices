import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { useState } from 'react';
import Card from './Card';

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  white: {
    backgroundColor: 'white',
    color: 'black',
  },
};
export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Button />
        <Card />
        <button onClick={() => setTheme(themes.white)}> Modo Claro</button>
        <button onClick={() => setTheme(themes.dark)}> Modo Oscuro</button>
      </ThemeContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
