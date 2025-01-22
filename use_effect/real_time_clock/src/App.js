import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date()); // State to hold the current time

  useEffect(() => {
    // Function to update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every 1 second (1000ms)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Real-Time Clock</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {time.toLocaleTimeString()} {/* Display the current time */}
      </p>
    </div>
  );
};

export default RealTimeClock;
