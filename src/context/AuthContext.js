import React, {useState, createContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLogged, setLogged] = useState(false);
  const [userId, setUserId] = useState('');
  let value = {
    isLogged,
    setLogged,
    userId,
    setUserId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
