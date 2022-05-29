import React from 'react';
import { LINKS } from './LINKS';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styles from '../../../styles/navigation/Sidebar.module.scss';


export default function Sidebar() {
  const returnLinks = () => {
    const navTitle = (link: boolean, id: number) => {
      if (link) {
        return (
          <div className={styles.seperator}>
            <strong>{LINKS[id].title}</strong>
          </div>
        );
      } else {
        return (
          <div className={styles.link}>
            <Link to={LINKS[id].url??'/'}>
                <Icon icon={LINKS[id].icon} />
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
