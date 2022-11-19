import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import selectors from "redux/selectors";

export default function PublicRoute() {
  const isUserLogin = useSelector(selectors.getIsLoggedIn);

  if (isUserLogin) {
    return <Navigate to="/contacts" />
  }

  return <Outlet />
}