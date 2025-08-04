import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  console.log("🔐 PrivateRoute user:", user);

  return user ? children : <Navigate to="/" />;
}

export default PrivateRoute;
