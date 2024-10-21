function romanToInt(romanNum) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < romanNum.length; i++) {
    const currentVal = romanMap[romanNum[i]];
    const nextVal = romanMap[romanNum[i + 1]];

    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
}

// Ejemplo de uso
console.log("IMPRESION ROMANINT");

console.log(romanToInt("X")); // 1994

console.log(romanToInt("MXCIV")); // 1994
