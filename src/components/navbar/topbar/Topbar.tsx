import React from 'react';
import { Icon, Button } from '@blueprintjs/core';
import { LINKS } from './LINKS';
import styles from '../../../styles/navigation/Topbar.module.scss';

export default function Topbar() {
  const returnLinks = () => {
    return LINKS.map((link) => {
      'hello'
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>ChessFront</div>
      <div className={styles.menu}>
        <Button minimal={true}>Testing</Button>
      </div>
    </div>
  );
}
