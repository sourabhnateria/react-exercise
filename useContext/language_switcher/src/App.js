import React, { createContext, useContext, useState } from "react";


// Define the available languages
const languages = {
  en: { greeting: "Hello, welcome!", switch: "Switch to Hindi" },
  hi: { greeting: "नमस्ते, स्वागत है!", switch: "अंग्रेज़ी में बदलें" },
};

// Create a context for language
const LanguageContext = createContext();

// Language provider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
const useLanguage = () => {
  return useContext(LanguageContext);
};

// Component displaying text dynamically
const Greeting = () => {
  const { language } = useLanguage();
  return <h1 className="text-xl font-bold">{languages[language].greeting}</h1>;
};

// Button to toggle language
const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button className="mt-4 p-2 border rounded" onClick={toggleLanguage}>
      {languages[language].switch}
    </button>
  );
};

// Main App Component
const App = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Greeting />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

export default App;
