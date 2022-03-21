import { Teaser } from 'components/core/Teaser/Teaser';
import { Grid } from 'components/layouts/Grid/Grid';
import { FEATURED_WORK } from 'content/featured-work';
import { TeaserItem } from 'types';
import { Title } from '../Title/Title';
import './styles.scss';

/**
 * Content component
 */
export const Content = () => {
  return (
    <div className="c-content">
      <Title />
      <h6 className="c-content__title">Recent Publications</h6>
      <Grid numOfCols={3}>
        {FEATURED_WORK.map((item: TeaserItem, index: number) => (
          <Teaser key={index} {...item} />
        ))}
      </Grid>
    </div>
  )
}