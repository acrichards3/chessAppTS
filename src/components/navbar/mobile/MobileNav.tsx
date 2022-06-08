import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import styles from '../../../styles/navigation/MobileNav.module.scss';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = (isOpen: boolean) => {
    if (isOpen) {
      return (
        <div className="div">
          testing
        </div>
      )
    } else {
      return (
        <div className="div">
          testing2
        </div>
      )
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>ChessFront</div>
      <div className={styles.menu}>
        {menuOpen(isOpen)}
      </div>
    </div>
  )
}
