import React from 'react';
import Maininfo from './Maininfo';
import Skills from './Skills';
import { useState } from 'react';

export const FormContext = React.createContext(); //1

export default (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [likes, setLikes] = useState('');
  //2
  return (
    <form>
      <FormContext.Provider
        value={{ email, password, likes, setEmail, setPassword, setLikes }}
      >
        <Maininfo />
        <Skills />
      </FormContext.Provider>
      <div>
        <p>Email: {email} </p>
        <p>Contraseña: {password} </p>
        <p>Lenguajes: {likes}</p>
      </div>
    </form>
  );
};
