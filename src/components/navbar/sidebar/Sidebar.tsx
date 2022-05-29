import React from 'react';
import { LINKS } from './LINKS';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styles from '../../../styles/navigation/Sidebar.module.scss';


export default function Sidebar() {
  const returnLinks = () => {
      return (
          LINKS.map((link) => {
              <Icon icon={link.icon} />
          })
      );
  };

  return 
  
  <div className={styles.sidebar}>
      <>
      {returnLinks()}
      </>
      </div>;
}
