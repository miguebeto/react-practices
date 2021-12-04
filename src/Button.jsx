import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './index.js';

export default (props) => {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <button
      style={{
        backgroundColor: context.backgroundColor,
        color: context.color,
      }}
    >
      Click me!
    </button>
  );
};
