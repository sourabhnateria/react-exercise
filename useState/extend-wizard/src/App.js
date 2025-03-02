import React, { useState, useEffect } from 'react';
import './styles.css';

const Step = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Wizard = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://facebook.com');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3)); // Increment step
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1)); // Decrement step
  };

  const renderStep = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (data.length > 0) {
      const currentData = data[step - 1];
      return <Step title={currentData.title} content={currentData.body} />;
    }
    return <p>No data available.</p>;
  };

  return (
    <div className="wizard-container">
      {renderStep()}
      <div className="navigation-buttons">
        <button onClick={prevStep} disabled={step === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={step === 3}>
          Next
        </button>
      </div>
    </div>
  );
};

const App = () => (
  <div className="app-container">
    <h1>Multi-Step Wizard with Data Fetching</h1>
    <Wizard />
  </div>
);

export default App;
