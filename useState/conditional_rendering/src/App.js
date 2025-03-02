import React, { useState } from 'react';


function ToggleViewComponent() {
  // State to manage which view is displayed
  const [isFirstView, setIsFirstView] = useState(true);

  // Function to toggle the state
  const toggleView = () => {
    setIsFirstView((prevState) => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Toggle Views</h1>

      {/* Conditionally rendered content */}
      {isFirstView ? (
        <div>
          <h2>View 1</h2>
          <p>This is the first view.</p>
        </div>
      ) : (
        <div>
          <h2>View 2</h2>
          <p>This is the second view.</p>
        </div>
      )}

      {/* Button to toggle the view */}
      <button onClick={toggleView}>
        Switch to {isFirstView ? 'View 2' : 'View 1'}
      </button>
    </div>
  );
}

export default ToggleViewComponent;
