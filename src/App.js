// App.js
import React, { useState } from 'react';
//import AgruparAnagramas from './components/GroupAnagramsComponent.js';
//import RomanToInt from './components/RomanInputComponent.js'
import './App.css'; 
import './groupAnagrams.js';
import './romanToInt.js'
const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      welcome! technical test
     </div>
  );
};

export default App;
