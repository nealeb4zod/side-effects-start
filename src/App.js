import React, {useState} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  
  const handleInc = () => {
      setNumber(number + 1);
  }

  const handleDec = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h2> Number is {number}</h2>
      <button value={number} onClick={handleInc}> + </button>
      <button value={number} onClick={handleDec}> - </button>

    </div>
  )
}

export default App;