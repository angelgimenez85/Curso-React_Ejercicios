import React from 'react';
import { useFetch } from '../hooks/useFetch';

const SelectsList = ({ label, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  if (!data) return null;

  if (error)
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor={'#dc3545'}
      />
    );

  const name = label.toLowerCase();
  const id = `select-${name}`;

  const options = data[name];

  return (
    <>
      {loading && <Loader />}
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige una opción</option>
        {data &&
          options.map((el) => <option value={el.nombre}>{el.nombre}</option>)}
      </select>
    </>
  );
};

export default SelectsList;
