import React, { useState, useEffect } from 'react';

const SearchWithDebounce = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Tracks user input
  const [debouncedTerm, setDebouncedTerm] = useState(''); // Tracks debounced value
  const [results, setResults] = useState([]); // Holds search results
  const [loading, setLoading] = useState(false); // Loading state

  // Update debounced term after a delay whenever the user types
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // Cleanup timeout on input change
    };
  }, [searchTerm]); // Runs whenever searchTerm changes

  // Fetch data based on the debounced term
  useEffect(() => {
    if (!debouncedTerm) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://google.com=${debouncedTerm}`
        ); // Example API with a query parameter
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedTerm]); // Runs whenever debouncedTerm changes

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Search with Debounce</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.length > 0 ? (
            results.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchWithDebounce;
