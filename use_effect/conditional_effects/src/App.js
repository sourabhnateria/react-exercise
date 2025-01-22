import React, { useState, useEffect } from 'react';

const ConditionalEffects = () => {
  const [count, setCount] = useState(0); // State to track the count
  const [message, setMessage] = useState(''); // State to track the message

  // Effect 1: Runs when 'count' changes
  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
    if (count % 2 === 0) {
      setMessage('The count is even.');
    } else {
      setMessage('The count is odd.');
    }
  }, [count]); // Dependency array with 'count'

  // Effect 2: Runs when the message changes
  useEffect(() => {
    console.log(`Message has been updated: ${message}`);
  }, [message]); // Dependency array with 'message'

  // Effect 3: Runs once when the component mounts
  useEffect(() => {
    console.log('Component mounted.');
    return () => {
      console.log('Component unmounted.'); // Cleanup effect
    };
  }, []); // Empty dependency array

  return (
    <div>
      <h1>Conditional useEffect Demo</h1>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default ConditionalEffects;
