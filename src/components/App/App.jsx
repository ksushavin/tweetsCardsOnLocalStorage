// react
import { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import UserRoutes from '../UserRoutes';
import Loader from "../Loader/Loader";
import selectors from "redux/selectors";
import authOperations from "redux/auth/auth-operations";
import Navbar from '../Navbar/Navbar';
import css from "components/App/App.module.css"

export function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectors.getLoadingUserStatus);

  useEffect(() => {
    dispatch(authOperations.current());
  }, [dispatch]);

  return (
    <>
      {isLoadingUser ? <Loader /> : (
        <>
          <header className={css.header}>
              <Navbar />
          </header>
          <main className={css.main}>
              <UserRoutes />
          </main>
        </> 
      )}
    </>
  );
    
};
