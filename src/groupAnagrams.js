function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    const sortedWord = word.toLowerCase().split('').sort().join('');

    
    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord).push(word);
  }

  
  return Array.from(map.values());
}

// Impresion groupAnagrams

const words = ["listen", "silent", "enlist", "hello", "elloh", "world", "dolor"];

console.log("Impresion groupAnagrams");
console.log(groupAnagrams(words));
