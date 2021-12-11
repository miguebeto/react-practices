import React, { useState } from 'react';
//4
interface user {
  uid: string;
  name: string;
}
//5
const tempUser: user = {
  uid: 'XYZ789',
  name: 'Fernando Herrera',
};

export const Usuario = (): void => {
  //6
  const [user, setUser] = useState<user>(tempUser); //1

  //2
  const login = (prev) => {
    const migue = {
      uid: 'ABC123',
      name: 'Miguel Blanco',
    };
    setUser({
      ...prev,
      migue,
    });
  };

  //3
  return (
    <div>
      <h3>Usuario: useState</h3>
      <button className="btn btn-outline-primary" onClick={() => login(tempUser)}>Login</button>
      <br />
      {!user ? 'No hay usuarios' : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
