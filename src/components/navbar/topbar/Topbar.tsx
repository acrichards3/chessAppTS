import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import { LINKS, ICONS } from '../LINKS';
import styles from '../../../styles/navigation/Topbar.module.scss';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const [active, setActive] = useState(0);

  const returnLinks = () => {
    return LINKS.map((link) => {
      return (
        <button
          className={
            active === link.id ? styles.activeMenuItem : styles.menuItem
          }
          key={link.id}
        >
          <Link
            to={link.url}
            style={{ textDecoration: 'none' }}
            key={link.id}
            onClick={() => setActive(link.id)}
          >
            {link.title}
          </Link>
        </button>
      );
    });
  };

  const returnIcons = () => {
    return ICONS.map((icon) => {
      return (
        <Link
          to={icon.url}
          className={styles.link}
          style={{ textDecoration: 'none' }}
          key={icon.id}
          onClick={() => setActive(icon.id)}
        >
          <Icon
            key={icon.id}
            icon={icon.icon}
            size={22}
            className={active === icon.id ? styles.activeLink : styles.link}
          />
        </Link>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          onClick={() => setActive(0)}
        >
          ChessFront
        </Link>
      </div>
      <div className={styles.menu}>{returnLinks()}</div>
      <div className={styles.links}>{returnIcons()}</div>
    </div>
  );
}
