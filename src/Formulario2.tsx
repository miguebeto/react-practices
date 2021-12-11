import React, { useState, ChangeEvent } from 'react';
import Label from 'reactstrap/types/lib/Label';
import { useForm } from './useForm';

export const Formulario2 = () => {
  const { formulario, handleChange } = useForm({
    postal: 'ABC',
    ciudad: 'Ottawa',
  });

  const { postal, ciudad } = formulario;

  return (
    <form autocomplete="off">
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          onChange={handleChange}
          className="form-control"
          type="postal"
          name="postal"
          id="postal"
          value={postal}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="nombre">
          Ciudad
        </label>
        <input
          onChange={handleChange}
          className="form-control"
          type="ciudad"
          name="ciudad"
          id="ciudad"
          value={ciudad}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
