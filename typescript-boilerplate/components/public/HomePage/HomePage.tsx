import React from 'react';
import { NextPage } from 'next';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { ContentProps } from '../../../types';

const contentProps: ContentProps = {
  heading: 'Budding Software Engineer',
  description: `Hello! I'm Justin, a software engineer currently working at WiseTech Global. Check out the content around my website to learn more about me!`,
};

const HomePage: NextPage = () => {
  return (
    <PublicShell title="Home | Justin's Website">
      <ContentHeader data={contentProps} />
    </PublicShell>
  );
};

export default HomePage;
