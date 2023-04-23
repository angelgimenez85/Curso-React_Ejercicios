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
  //https://apis.datos.gob.ar/georef/api/provincias
  //https://apis.datos.gob.ar/georef/api/departamentos?provincia=santa%20fe&max=500
  //https://apis.datos.gob.ar/georef/api/localidades?provincia=santa%20fe&departamento=general%20obligado&max=500
  //https://apis.datos.gob.ar/georef/api/localidades?municipio=reconquista&max=500

  //https://apis.datos.gob.ar/georef/api/municipios?provincia=santa%20fe&max=500
  //https://apis.datos.gob.ar/georef/api/localidades?departamento=general%20obligado
  //{"errores":[{"mensaje":"No se encontró la URL especificada.","recursos_disponibles":["/api/provincias","/api/departamentos","/api/municipios","/api/localidades-censales","/api/asentamientos","/api/localidades","/api/calles","/api/direcciones","/api/ubicacion"]}]}

  //https://github.com/danielsalina/apiLocalidades/blob/main/js/script.js
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
