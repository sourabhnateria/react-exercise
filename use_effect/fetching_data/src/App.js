import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.https://community.postman.com/t/array-confused-as-boolean-by-postman/9461.com/posts'); // Example API
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json(); // Parse JSON data
        setData(result); // Set the fetched data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Turn off loading indicator
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures the effect runs only once

  // Render loading, error, or data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
