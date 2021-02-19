import React, {useState, createContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLogged, setLogged] = useState(false);

  let value = {
    isLogged,
    setLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
