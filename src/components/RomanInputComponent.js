import React, { useState } from 'react';

function RomanToInt() {
  const [roman, setRoman] = useState('');
  const [integer, setInteger] = useState(null);

  const romanToInt = (roman) => {
    const romanMap = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50,
      'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;

    for (let i = 0; i < roman.length; i++) {
      const currentValue = romanMap[roman[i]];
      const nextValue = romanMap[roman[i + 1]];

      if (nextValue && currentValue < nextValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
    }

    return total;
  };

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    setRoman(value);

    // Validamos si el input tiene contenido válido antes de convertirlo
    if (/^[IVXLCDM]*$/.test(value)) {
      setInteger(romanToInt(value));
    } else {
      setInteger('Entrada inválida');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Convertir Números Romanos a Enteros</h2>
      <input
        type="text"
        value={roman}
        onChange={handleChange}
        placeholder="Introduce un número romano"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <div>
        <strong>Resultado:</strong> {integer !== null ? integer : 'Esperando entrada...'}
      </div>
    </div>
  );
}

export default RomanToInt;
