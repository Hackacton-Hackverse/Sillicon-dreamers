import { useAuthentication } from "../context/AuthContext";
import { Navigate } from "react-router";
import { getCurrentUser } from "../services/authService";

const AuthenticationGuard = ({ Component }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  if(getCurrentUser()){
    setIsAuthenticated(true);
  } /* else {
    setIsAuthenticated(false);
  } */
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default AuthenticationGuard;
