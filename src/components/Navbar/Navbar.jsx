import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import selectors from "redux/selectors";
import css from "./Navbar.module.css";
import logo from 'images/roundLogo.png'

const Navbar = () => {
    const isUserLoggedIn = useSelector(selectors.getIsLoggedIn);

    return (
        <nav
            className={css.navbar__container}> 
            <Link to="/" className={css.logo__link}>
                <img className={css.logo__img} src={logo} alt=""></img>
                <span className={css.logo__text}>
                    Phonebook
                </span>
            </Link>
            {isUserLoggedIn && <NavbarMenu />}
            {isUserLoggedIn ? <NavbarUser /> : <NavbarAuth />}
        </nav>
    )
}

export default Navbar;