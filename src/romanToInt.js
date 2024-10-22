function romanToInt(romanNum) {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  //total=5  
  //prev = 5
  let total = 0;
  let prevVal = 0;

  for (let i = romanNum.length - 1; i >= 0; i--) {
    const currentVal = romanMap.get(romanNum[i]);
      //XV = X=10 V=5
    if (currentVal < prevVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
    prevVal = currentVal;
  }

  return total;
}

// Ejemplo de uso
console.log("IMPRESIÓN ROMANINT");

console.log(romanToInt("Z")); // cambios
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("IV")); // 4
console.log(romanToInt("MMXXIV")); // 2024
