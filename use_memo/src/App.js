import React, { useState, useMemo } from 'react';

const NumberList = ({ numbers }) => {
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return (
    <div>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};

const App = () => {
  const [numberArray, setNumberArray] = useState([1, 2, 3, 4, 5]);

  const handleAddNumber = () => {
    // Simulate adding a random number to the array
    setNumberArray((prevNumbers) => [
      ...prevNumbers,
      Math.floor(Math.random() * 10),
    ]);
  };

  return (
    <div>
      <h1>Number List</h1>
      <NumberList numbers={numberArray} />
      <button onClick={handleAddNumber}>Add Number</button>
    </div>
  );
};

export default App;
