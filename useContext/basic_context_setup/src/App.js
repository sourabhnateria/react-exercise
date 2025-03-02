import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

// Theme Toggle Button
function ThemeToggleButton() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggle-button">
      Toggle Theme
    </button>
  );
}

// Themed Component
function ThemedComponent() {
  const { theme } = useTheme();

  return (
    <div className={`themed-container ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <ThemeToggleButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
