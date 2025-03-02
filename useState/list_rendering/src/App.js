import React, {useState} from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState ('');

  const addItems =()=>{
    if(inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
    // const newItem = `Item ${items.length +  1}`;
    
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return(
    <div className="App">
      <h1>React List Component</h1>
      <form onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="userInput">Enter something: </label>
        <input
          type="text"
          id="userInput"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <button onClick ={addItems}>Add Item</button>
      <ul>
        {items.map((items, index)=>(
          <li key={index}>{items}  </li>
        ))}
      </ul>
    </div>
  );
}

export default App;