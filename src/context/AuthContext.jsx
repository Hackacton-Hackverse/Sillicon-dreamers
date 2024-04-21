import React, {useContext, createContext, useState} from 'react'

const AuthenticationContext = createContext();
export const useAuthentication =  ()=> useContext(AuthenticationContext)

const AuthContext = ({children}) => {

  const [user,setUser] = useState(null);
  const [isAuthenticated,setIsAuthenticated] = useState(true);

  return (
    <AuthenticationContext.Provider value={{isAuthenticated, user,setIsAuthenticated,setUser}}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthContext;