import { NavLink } from "react-router-dom";
import css from "components/Navbar/NavbarAuth/NavbarAuth.module.css"

export default function NavbarAuth() {
  return (
    <ul className={css.authMenu} >
      <li className={css.authMenu__item}>
        <NavLink className={css.link} to="/register">Register</NavLink>
      </li>
      <li className={css.authMenu__item}>
        <NavLink className={css.link} to="/login">Login</NavLink>
      </li>
        
        
    </ul>
  )
}