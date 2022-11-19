import { NavLink } from "react-router-dom";
import { nanoid } from 'nanoid';
import css from "./NavbarMenu.module.css";

const items = [
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts"
    },
];

const getClassName = ({isActive}) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
}

const NavbarMenu = () => {
    const elements = items.map(({id, to, text}) => (
        <li key={id} className={css.item}>
            <NavLink className={getClassName} to={to}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={css.menu}>
           {elements}
        </ul>
    )
}

export default NavbarMenu;