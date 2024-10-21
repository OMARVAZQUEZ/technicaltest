import React, { useState } from 'react';

const AgruparAnagramas = () => {
  const [palabras, setPalabras] = useState('');
  const [resultado, setResultado] = useState([]);

  const agruparAnagramas = (listaDePalabras) => {
    const mapa = new Map();

    for (const palabra of listaDePalabras) {
     
      const palabraNormalizada = palabra.toLowerCase().split('').sort().join('');

      // Agrupamos en el mapa las palabras que comparten la misma clave ordenada
      if (!mapa.has(palabraNormalizada)) {
        mapa.set(palabraNormalizada, []);
      }
      mapa.get(palabraNormalizada).push(palabra);
    }

    // Convertimos el mapa en un array de arrays
    return Array.from(mapa.values());
  };

  const manejarCambio = (event) => {
    setPalabras(event.target.value);
  };

  const manejarSubmit = (event) => {
    event.preventDefault();
    const listaDePalabras = palabras.split(',').map(p => p.trim());
    setResultado(agruparAnagramas(listaDePalabras));
  };

  return (
    <div>
      <h1>Agrupar Anagramas</h1>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          value={palabras}
          onChange={manejarCambio}
          placeholder="Ingresa palabras separadas por comas"
        />
        <button type="submit">Agrupar</button>
      </form>
      <h2>Resultado:</h2>
      <pre>{JSON.stringify(resultado, null, 2)}</pre>
    </div>
  );
};

export default AgruparAnagramas;
