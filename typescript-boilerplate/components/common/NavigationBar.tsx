import React from 'react';
import Link from 'next/link';
import { Header } from 'semantic-ui-react';
import { Img } from 'react-optimized-image';

import Logo from '../../assets/nyalogo3.png';

import styles from '../styling/NavigationBar.module.css';

// Helper function to create tabs.
const tabs: string[] = ['About', 'Projects', 'University'];
const url = (tab: string): string => {
  if (tab === 'About') return '/';
  return `/${tab.toLowerCase().replace(/\s/g, '')}`;
};

// Navbar.
const NavigationBar: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Img src={Logo} sizes={[140]} className={styles.clickable} alt="nya-logo" />
        </Link>
      </div>
      <div className={styles.navlinks}>
        {tabs.map((tab) => {
          return (
            <Link href={url(tab)} key={tab}>
              <a className={styles.navitem}>
                <span className={styles.override}>{tab}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

export default NavigationBar;
