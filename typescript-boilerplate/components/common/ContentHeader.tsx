import React from 'react';

import { ContentProps } from '../../types';

import styles from '../styling/ContentHeader.module.css';

// Interface for content props.
interface ContentInterface {
  data: ContentProps;
}

// Content header.
const ContentHeader: React.FC<ContentInterface> = ({ data }) => (
  <div className={styles.container}>
    <p className={styles.heading}>{data.heading}</p>
    {typeof data.description === 'string' && (
      <span className={styles.description}>{data.description}</span>
    )}
    {typeof data.description === 'object' &&
      data.description.map((paragraph, idx) => {
        return (
          <p className={styles.paragraph} key={idx}>
            {paragraph}
          </p>
        );
      })}
  </div>
);

export default ContentHeader;
