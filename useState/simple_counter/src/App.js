// Import React and useState from react
import React, { useState } from 'react';

// Functional Component: Counter
function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '40px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 2)}>
        Decrement
      </button>
    </div>
  );
}

// Export the Counter component as default
export default Counter;

// To use this component, import and render it in your main application file, like so:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Counter from './Counter';
// ReactDOM.render(<Counter />, document.getElementById('root'));
