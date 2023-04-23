import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
  const { state, setState } = useState('');
  const { town, setTown } = useState('');
  const { suburb, setSuburb } = useState('');
  
  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Argentina</h3>
      <SelectList 
        label='Provincias' 
        url='https://apis.datos.gob.ar/georef/api/provincias' 
        handleChange={(e) => {setState(e.target.value)}}/>
      {state && 
        <SelectList 
          label='Departamentos' 
          url={`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${state}&max=500`} 
          handleChange={(e) => {setSuburb(e.target.value)}}
        />}
      {town && 
        <SelectList 
          label='Localidades' 
          url={`https://apis.datos.gob.ar/georef/api/localidades?provincia=${state}&departamento=${town}&max=500`} 
          handleChange={(e) => {setSuburb(e.target.value)}}
        />}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
