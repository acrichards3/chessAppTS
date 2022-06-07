import React from 'react';
import { Icon, Button, MenuItem } from '@blueprintjs/core';
import { LINKS } from './LINKS';
import styles from '../../../styles/navigation/Topbar.module.scss';

export default function Topbar() {
  const returnLinks = () => {
    return (
      LINKS.map(link => {
        return (
          <Button minimal={true} className={styles.menuItem}>{link.title}</Button>
        );
      })
    );
  }

  return (
    <div className={styles.container}>
        <div className={styles.title}>ChessFront</div>
        <div className={styles.menu}>
          {returnLinks()}
        </div>
        <div className={styles.links}>
            <Icon icon='shield' size={22} className={styles.link} />
            <Icon icon='document' size={22} className={styles.link} />
            <Icon icon='lightbulb' size={22} className={styles.link} />
        </div>
    </div>
  )
}
