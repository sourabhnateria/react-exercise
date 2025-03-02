import React, { useState, useEffect } from "react";

const AuthStatusChecker = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null for loading state

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Simulate an API call to check authentication status
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve({ authenticated: true }), 2000); // Simulated delay
        });

        setIsAuthenticated(response.authenticated);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 shadow-md bg-white rounded-lg">
        {isAuthenticated === null ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            <span className="ml-2 text-gray-600">Checking authentication...</span>
          </div>
        ) : isAuthenticated ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600">Welcome Back!</h2>
            <p className="text-gray-600 mt-2">You are successfully authenticated.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => alert("Proceeding to dashboard...")}
            >
              Go to Dashboard
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600">Authentication Failed</h2>
            <p className="text-gray-600 mt-2">You are not logged in. Please log in to continue.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => alert("Redirecting to login...")}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthStatusChecker;
