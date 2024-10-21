import React, { createContext, useState } from 'react'

//Create AuthContext
export const AuthContext = createContext();

//Create the AuthProvider component
export const AuthProvider = ({ children }) => {
      const [authState, setAuthState] = useState({
        username: "",
        isLoggedIn: false,
      });

      const login = (username) => {
        setAuthState({ username, isLoggedIn: true})
      }

      const logout = () => {
        setAuthState({username: '', isLoggedIn: false})
      }

      return (
        <AuthContext.Provider value = {{ authState, login, logout}}>
            {children}
        </AuthContext.Provider>

      )
}