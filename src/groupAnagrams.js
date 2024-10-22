function groupAnagrams(words) {
  const map = {};

  for (const word of words) {
    const count = new Array(26).fill(0);

    for (const char of word.toLowerCase()) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join("#");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  return Object.values(map);
}

const words = [
  "listen",
  "silent",
  "enlist",
  "hello",
  "elloh",
  "world",
  "dolor",
];

console.log("Impresion groupAnagrams");
console.log(groupAnagrams(words));
