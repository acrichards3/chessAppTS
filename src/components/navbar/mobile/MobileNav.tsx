import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { MOBILE } from '../LINKS';
import styles from '../../../styles/navigation/MobileNav.module.scss';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setActive] = useState(0);

  const menuOpen = (isOpen: boolean) => {
    if (isOpen) {
      return (
        <div className={styles.openMenu}>
          <div>
            <button onClick={() => setIsOpen(false)} className={styles.menuBtn}>
              <Icon icon="menu-closed" size={30} />
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <button onClick={() => setIsOpen(true)} className={styles.menuBtn}>
          <Icon icon="menu" size={30} />
        </button>
      );
    }
  };

  const currentlyOpen = (isOpen: boolean) => {
    if (isOpen) {
      return (
        <div className={styles.menuOpen}>
          {MOBILE.map((link) => {
            return (
              <Link
                to={link.url}
                key={link.id}
                style={{ textDecoration: 'none' }}
                className={isActive === link.id ? styles.active : styles.link}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      );
    }

    return;
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          className={styles.title}
          onClick={() => setIsOpen(false)}
        >
          ChessFront
        </Link>
      </div>
      <div className={styles.menu}>{menuOpen(isOpen)}</div>
    </div>
    <div>
      {currentlyOpen(isOpen)}
    </div>
    </>
  );
}
