import React from 'react';
import { NextPage } from 'next';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { ContentProps } from '../../../types';

const contentProps: ContentProps = {
  heading: 'University',
  description: `Stuff about uni I suppose?`,
};

const University: NextPage = () => {
  return (
    <PublicShell title="University | Justin's Website">
      <ContentHeader data={contentProps} />
    </PublicShell>
  );
};

export default University;
