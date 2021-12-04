import React from 'react';
import { useContext } from 'react'; //3
import { FormContext } from './Form';

export default (props) => {
  const ctx = useContext(FormContext); //4
  // console.log(ctx); //5
  return (
    <div>
      <label htmlFor="email">Email: </label>
      <input
        onChange={(e) => ctx.setEmail(e.target.value)}
        type="text"
        id="email"
        placeholder="Digite su usuario"
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input 
      onChange={(e) => ctx.setPassword(e.target.value)}
      type="password" 
      id="password" 
      placeholder="Digite su contraseña" />
    </div>
  );
};
