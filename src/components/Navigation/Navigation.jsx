import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getToken } from 'redux/Auth/auth-selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const token = useSelector(getToken);
  return (
    <>
      {token ? (
        <nav className={css.navigation}>
          <NavLink to="/dairy" className={css.first}>
            Diary
          </NavLink>
          <NavLink to="/calculator" className={css.second}>
            Calculator
          </NavLink>
        </nav>
      ) : (
        <nav className={css.navigation}>
          <NavLink to="/signin" className={css.first}>
            Sign in
          </NavLink>
          <NavLink to="/registration" className={css.second}>
            Registration
          </NavLink>
        </nav>
      )}
    </>
  );
}
