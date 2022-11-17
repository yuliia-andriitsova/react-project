import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
      <UserInfo />
    </div>
  );
}
