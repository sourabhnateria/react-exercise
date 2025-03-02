import React, { createContext, useContext, useState } from "react";

// Create User Context
const UserContext = createContext();
// Create Theme Context
const ThemeContext = createContext();

// User Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Sourabh", age: 30 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "bg-gray-800 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Component using both contexts
const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-4 border rounded">
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

// Component using Theme Context
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="mt-4 p-2 border rounded">
      Toggle Theme ({theme})
    </button>
  );
};

// Main App Component with Nested Contexts
const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <UserProfile />
          <ThemeSwitcher />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;