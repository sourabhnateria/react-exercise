import { createContext, useContext, useState } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// Theme Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to use theme
export function useTheme() {
  return useContext(ThemeContext);
}
