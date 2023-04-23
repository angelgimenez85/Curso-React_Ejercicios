import React from 'react';
import './style.css';
import SongSearch from './components/SongSearch';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SelectsAnidados from './components/SelectsAnidados';

export default function App() {
  return (
    <div>
      <h1>Ejercicios con React</h1>
      <hr/>
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}
