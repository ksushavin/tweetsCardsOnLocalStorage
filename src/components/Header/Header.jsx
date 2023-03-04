import React from 'react';
import logo from '../../images/logo.svg';
import css from './Header.module.css'

function Header() {
  return (
      <header className={css.header}>
        <img src={logo} alt="logo" />
    </header>
  )
}

export default Header
