import React from 'react'; 
import { LINKS } from '../topbar/LINKS';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styles from '../../../styles/navigation/Sidebar.module.scss';


export default function Sidebar() {
  const returnLinks = () => {
    const navTitle = (bold: boolean, id: number) => {
      if (bold) {
        return (
          <div className={styles.seperator}>
            <strong className={styles.title}>{LINKS[id].title}</strong>
          </div>
        );
      } else {
        return (
          <div className={styles.link}>
            <Link to={LINKS[id].url??'/'} className={styles.linkText}>
                <Icon icon={LINKS[id].icon} className={styles.linkIcon} size={18} />
                {LINKS[id].title}
            </Link>
          </div>
        );
      }
    };

    return LINKS.map((link) => {
      return navTitle(link.bold, link.id);
    });
  };

  return (
    <div className={styles.sidebar}>
        {returnLinks()}
    </div>
  );
}
