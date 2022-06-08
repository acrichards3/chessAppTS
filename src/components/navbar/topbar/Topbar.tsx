import React from 'react';
import { Icon, Button } from '@blueprintjs/core';
import { LINKS, ICONS } from './LINKS';
import styles from '../../../styles/navigation/Topbar.module.scss';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const returnLinks = () => {
    return LINKS.map((link) => {
      return (
        <Button minimal={true} className={styles.menuItem}>
          <Link to={link.url} style={{ textDecoration: 'none' }}>
            {link.title}
          </Link>
        </Button>
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
        >
          <Icon icon={icon.icon} size={22} className={styles.link} />
        </Link>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link to="/" style={{ textDecoration: 'none'}}>ChessFront</Link>
      </div>
      <div className={styles.menu}>{returnLinks()}</div>
      <div className={styles.links}>{returnIcons()}</div>
    </div>
  );
}
