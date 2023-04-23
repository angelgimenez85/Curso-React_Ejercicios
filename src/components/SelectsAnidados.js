import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
  const { state, setState } = useState('');
  const { town, setTown } = useState('');
  const { suburb, setSuburb } = useState('');

  const handleChange=(e) => {
    setTown(e.target.value);
  };
  
  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList label='Estados' url='' handleChange={(e) => {setState(e.target.value)}}/>
      {state && <SelectList label='Municipios' url='' />}
      {town && <SelectList label='Colonias' url='' handleChange={(e) => {setSuburb(e.target.value)}}/>}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
