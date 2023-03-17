import { useState } from 'react';
import Bulb from './Components/Bulb/Bulb';
import './App.css';

function App() {
  const [bulbCount, setBulbCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <button
        onClick={() => setBulbCount((count) => count + 1)}
        >
          Add bulb
        </button>
        <button
        onClick={() => setBulbCount((count) => count - 1)}
        disabled={bulbCount === 0}
        >
          Remove bulb
        </button>
      </header>
      {[...Array(bulbCount)].map((item, index) => {
        return (
          <Bulb id={index}/>
        )
      })}
    </div>
  );
}

export default App;
