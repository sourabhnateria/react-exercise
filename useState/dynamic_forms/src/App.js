import React, {useState} from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState ('');

  const addItems =()=>{
    if(inputValue.trim()) {
      const newItem ={ id:Date.now(), value: inputValue};
      setItems([...items, newItem]);
      setInputValue('');
    }
    // const newItem = `Item ${items.length +  1}`;
    
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
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
          size="20 px"
          id="userInput"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <button onClick ={addItems}>Add Item</button>
      <ul>
        {items.map((item, index)=>(
          <li key={ item.id}>{ item.value} <button2 onClick={()=>deleteItem( item.id)}>remove item</button2> </li>
        ))}
      </ul>
    </div>
  );
}

export default App;