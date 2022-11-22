import React from 'react';
import { Link } from 'react-router-dom';
import scss from './HeaderMenu.module.scss';
export const HeaderMenu = () => {
  return (
    <nav className={scss.HeaderMenu}>
      <Link to="/dairy" className={scss.item}>
        Diary
      </Link>
      <Link to="/calculator" className={scss.item}>
        Calculator
      </Link>
    </nav>
  );
};
