import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/signin" className={styles.first}>
        Sign in
      </NavLink>
      <NavLink to="/registration" className={styles.second}>
        Registration
      </NavLink>

      {/* если пользователь авторизирован
      <NavLink to="/diary" className={styles.first}>Diary</NavLink>
      <NavLink to="/calculator" className={styles.second}>Calculator</NavLink> */}
    </nav>
  );
}
