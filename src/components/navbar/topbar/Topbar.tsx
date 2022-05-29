import React from 'react';
import styles from '../../../styles/navigation/Topbar.module.scss';
import { Icon } from '@blueprintjs/core';

export default function Topbar() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>ChessFront</div>
        <div className={styles.links}>
            <Icon icon='shield' size={22} className={styles.link} />
            <Icon icon='document' size={22} className={styles.link} />
            <Icon icon='lightbulb' size={22} className={styles.link} />
        </div>
    </div>
  )
}
