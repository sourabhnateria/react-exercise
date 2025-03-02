import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state to manage input value
  const [inputValue, setInputValue] = useState('');

  // Handler for updating state when the input changes
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>React Input Form</h1>
      <form>
        <label htmlFor="userInput">Enter something: </label>
        <input
          type="text"
          id="userInput"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default App;
