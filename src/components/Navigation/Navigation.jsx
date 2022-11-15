import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/signin">Sign in</NavLink>
      <NavLink to="/registration">Registration</NavLink>

      {/* если пользователь авторизирован
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/calculator">Calculator</NavLink> */}
    </nav>
  );
}
