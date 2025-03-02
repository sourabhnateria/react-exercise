import React, { useState } from 'react';
import './styles.css';

const Step1 = () => (
  <div>
    <h2>Step 1</h2>
    <p>This is the content of Step 1.</p>
  </div>
);

const Step2 = () => (
  <div>
    <h2>Step 2</h2>
    <p>This is the content of Step 2.</p>
  </div>
);

const Step3 = () => (
  <div>
    <h2>Step 3</h2>
    <p>This is the content of Step 3.</p>
  </div>
);

const Wizard = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3)); // Increment step
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1)); // Decrement step
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return null;
    }
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
    <h1>Multi-Step Wizard</h1>
    <Wizard />
  </div>
);

export default App; // Export the App component as the default export
