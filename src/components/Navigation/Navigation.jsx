import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/signin" className={css.first}>
        Sign in
      </NavLink>
      <NavLink to="/registration" className={css.second}>
        Registration
      </NavLink>

      {/* если пользователь авторизирован
      <NavLink to="/diary" className={css.first}>Diary</NavLink>
      <NavLink to="/calculator" className={css.second}>Calculator</NavLink> */}
    </nav>
  );
}
