import { Navigate } from "react-router-dom";
import getUserFromStorage from "../../utils/GetToken";

const AuthRoute = ({ children }) => {
  const token = getUserFromStorage();

  if (!token) { 
    <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default AuthRoute;
