import React, { useState, useEffect } from 'react';
import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import styles from '../../../styles/navigation/MobileNav.module.scss';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(true);
  
  const menuOpen = (isOpen: boolean) => {
    if (isOpen) {
      return (
        <button onClick={() => setIsOpen(false)} className={styles.menuBtn}>
          <Icon icon="menu-closed" size={30} />
        </button>
      );
    } else {
      return (
        <button onClick={() => setIsOpen(true)} className={styles.menuBtn}>
          <Icon icon="menu" size={30} />
        </button>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          className={styles.title}
        >
          ChessFront
        </Link>
      </div>
      <div className={styles.menu}>{menuOpen(isOpen)}</div>
    </div>
  );
}
