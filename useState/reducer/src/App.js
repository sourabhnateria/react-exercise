import React, { useReducer, useEffect } from 'react';
import './styles.css';

// Step component
const Step = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

// Reducer function
const wizardReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        step: Math.min(state.step + 1, 3), // Increment step, max is 3
      };
    case 'PREV_STEP':
      return {
        ...state,
        step: Math.max(state.step - 1, 1), // Decrement step, min is 1
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const Wizard = () => {
  const initialState = {
    step: 1,
    data: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(wizardReducer, initialState);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING' });

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Updated API URL
        const result = await response.json();
        dispatch({ type: 'SET_DATA', payload: result });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, []);

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const renderStep = () => {
    if (state.loading) {
      return <p>Loading...</p>;
    }
    if (state.data.length > 0) {
      const currentData = state.data[state.step - 1];
      return <Step title={currentData.title} content={currentData.body} />;
    }
    return <p>No data available.</p>;
  };

  return (
    <div className="wizard-container">
      {renderStep()}
      <div className="navigation-buttons">
        <button onClick={prevStep} disabled={state.step === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={state.step === 3}>
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
