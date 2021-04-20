import React from 'react';
import Link from 'next/link';

import styles from '../styling/FooterBar.module.css';

// Footer.
const FooterBar: React.FC = () => (
  <div className={styles.container}>
    <span>
      Copyright © 2021{' '}
      <Link href="https://github.com/kingofboxes">
        <a className={styles.override}>Justin Liang</a>
      </Link>
    </span>
  </div>
);

export default FooterBar;
