import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
    </div>
  );
}
