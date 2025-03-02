import React, { useState, useEffect } from "react";

const ThemingComponent = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  useEffect(() => {
    // Apply the theme to the document body when the theme changes
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Theming Example</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Current Theme: <strong>{theme}</strong>
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemingComponent;


