import React, { createContext, useState, useEffect, useContext } from 'react';


const AuthContext = createContext();

export const useAuth = () => {
 return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
 const [currentUser, setCurrentUser] = useState(null);

 // Load the current user from localStorage when the component mounts
 useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
 }, []);

 const value = {
    currentUser,
    setCurrentUser,
 };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
