import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';
import styles from './Header.module.scss';

export default function Header() {
  const token = useSelector(getToken);

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      {token && <UserInfo />}
    </header>
  );
}
