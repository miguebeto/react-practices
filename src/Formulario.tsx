import React from 'react';
import Label from 'reactstrap/types/lib/Label';
import { useForm } from './useForm';

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { email, nombre, edad, handleChange, formulario } = useForm<FormData>({
    email: 'miguelangell1994@hotmail.com',
    nombre: 'Miguel Blanco',
    edad: 26,
  });

  // const { email, nombre, edad } = formulario;
  // const [formulario, setFormulario] = useState({
  //   email: '',
  //   nombre: '',
  // });

  // const handleChange = ({target}: ChangeEvent<HTMLInputElement>)=> {
  //  const {name, value} = target;
  //   setFormulario({
  //     ...formulario,
  //     [name]: value
  //   })
  // }

  return (
    <form autocomplete="off">
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          onChange={handleChange}
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={email}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="nombre">
          Nombre
        </label>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="nombre">
          Edad
        </label>
        <input
          onChange={handleChange}
          className="form-control"
          type="number"
          name="edad"
          id="edad"
          value={edad}
        />
        <pre>{JSON.stringify(formulario)}</pre>
      </div>
    </form>
  );
};
