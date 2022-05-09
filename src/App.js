import React from 'react';
import './style.css';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';

export default function App() {
  return (
    <div>
      <h1>Ejercicios con React</h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}
