import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import selectors from "redux/selectors";

export default function PrivateRoute() {
  const isUserLogin = useSelector(selectors.getIsLoggedIn);

  if (!isUserLogin) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}