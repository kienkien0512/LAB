import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // Nếu không có token → chưa đăng nhập → đá về login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập → cho vào trang
  return children;
}

export default PrivateRoute;
