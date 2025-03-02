import React, {createContext, useState, useContext} from "react";


const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuhtenticated] = useState(false);
  const login =() => setIsAuhtenticated (true);
  const logout =()=> setIsAuhtenticated(false);

  return(
    <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthStatus = () => {
  const { isAuthenticated, logout} = useContext(AuthContext);
  return(
    <div className="p-4">
      {isAuthenticated ? (
        <>
        <p className="mb-2">you are logged in.</p>
        <button onClick= {logout} className="px-4 bg-red-500 text-white rounded">Logout</button>
        </>
      ) :(
        <p> you are logged out. </p>
      )}
    </div>
  );
};

const LoginButton = () => {
  const {isAuthenticated, login} = useContext(AuthContext);
  return(
    !isAuthenticated && <button onClick = {login} className="px-4 py-2 bg-blue-500 text-white rounded">Login </button>
  );
};

const App =() => {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <AuthStatus/>
        <LoginButton/>
      </div>
    </AuthProvider>
  );
};

export default App;