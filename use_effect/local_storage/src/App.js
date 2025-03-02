import React, { useState, useEffect } from 'react';

const LocalStorageComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const savedData = localStorage.getItem("myData");
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const handleSave = () => {
    // Save data to localStorage
    localStorage.setItem("myData", data);
    alert("Data saved to local storage!");
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 shadow-md bg-white rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Local Storage Demo</h2>
        <textarea
          className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
          rows="4"
          value={data}
          onChange={handleChange}
          placeholder="Type something here..."
        />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSave}
        >
          Save to Local Storage
        </button>
      </div>
    </div>
  );
};

export default LocalStorageComponent;
