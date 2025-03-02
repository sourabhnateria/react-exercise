import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({ price: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({ price: (Math.random() * 50 + 75).toFixed(2) });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useDataContext = () => useContext(DataContext);

const PriceDisplay = () => {
  const { price } = useDataContext();
  return <h2>Stock Price: ${price}</h2>;
};

const StockDashboard = () => {
  return (
    <div>
      <h1>Real-Time Stock Prices</h1>
      <PriceDisplay />
    </div>
  );
};

const App = () => {
  return (
    <DataProvider>
      <StockDashboard />
    </DataProvider>
  );
};

export default App;
