import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import selectors from "redux/selectors";
import css from 'components/Navbar/NavbarUser/NavbarUser.module.css';

export default function NavbarUser() {
    const dispatch = useDispatch();
    const email = useSelector(selectors.getUserEmail);
  
    const onLogout = () => {
        dispatch(authOperations.logout());
    }

    return (
        <div>
            <p className={css.email}>{`${email}`}</p>
            <button onClick={onLogout} className={css.button}>Logout</button>
        </div>
    )
}