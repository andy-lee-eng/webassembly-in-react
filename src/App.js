import React, { useState } from 'react';
import './App.css';

import waApi from './wa-api';

function App() {
  const [value, setValue] = useState(5);
  const [result, setResult] = useState();
  const [scamble, setScramble] = useState('scramble this string');

  return (
    <div className="App">
      <p>
        The factorial of
        <input value={value} onChange={evt => setValue(evt.target.value)} />
        is {result}
      </p>
      <button onClick={async () => setResult((await waApi).factorial(value))}>
        Calculate
      </button>


      <p>Scrambled string: {scamble}</p>
      <button onClick={async () => setScramble((await waApi).scramble(scamble))}>
        Scramble
      </button>
    </div>
  );
}

export default App;
