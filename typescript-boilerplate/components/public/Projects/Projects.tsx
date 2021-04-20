import React from 'react';
import { NextPage } from 'next';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { ContentProps } from '../../../types';

const contentProps: ContentProps = {
  heading: 'Projects',
  description: `Stuff about things I've done I suppose?`,
};

const Projects: NextPage = () => {
  return (
    <PublicShell title="Projects | Justin's Website">
      <ContentHeader data={contentProps} />
    </PublicShell>
  );
};

export default Projects;
