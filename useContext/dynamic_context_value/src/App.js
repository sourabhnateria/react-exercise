import React, { createContext, useContext, useState, useEffect } from "react";

// Create Timer Context
const TimerContext = createContext();

// Timer Provider Component
const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <TimerContext.Provider value={{ time, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

// Custom Hook for using Timer Context
const useTimer = () => {
  return useContext(TimerContext);
};

// Display Timer Component
const TimerDisplay = () => {
  const { time } = useTimer();
  return <h1 className="text-2xl font-bold">Time: {time}s</h1>;
};

// Timer Controls Component
const TimerControls = () => {
  const { startTimer, stopTimer, resetTimer } = useTimer();
  return (
    <div className="mt-4 flex gap-4">
      <button className="p-2 border rounded" onClick={startTimer}>Start</button>
      <button className="p-2 border rounded" onClick={stopTimer}>Stop</button>
      <button className="p-2 border rounded" onClick={resetTimer}>Reset</button>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <TimerProvider>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <TimerDisplay />
        <TimerControls />
      </div>
    </TimerProvider>
  );
};

export default App;
