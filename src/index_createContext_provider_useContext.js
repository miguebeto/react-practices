import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

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
  return (
    <div>
      <ThemeContext.Provider value={themes.white}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
