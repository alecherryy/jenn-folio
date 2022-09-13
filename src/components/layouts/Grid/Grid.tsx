import './styles.scss';

import React, { ReactNode } from 'react';
import { mergeClassNames } from 'utils/utils';

/**
 * Grid layout
 */
type Props = {
  numOfCols: 1 | 2 | 3 | 4 | 6;
  children: ReactNode;
}

export const Grid = ({ children, numOfCols }: Props) => {
  const classes = mergeClassNames('l-grid', `l-grid--${numOfCols}-col`);
  return (
    <div className={classes}>
      {children}
    </div>
  );
};