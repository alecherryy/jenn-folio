import { Teaser } from 'components/core/Teaser/Teaser';
import { Grid } from 'components/layouts/Grid/Grid';
import { FEATURED_WORK } from 'content/featured-work';
import { TeaserItem } from 'types';
import './styles.scss';

/**
 * Featured work component
 */
export const FeaturedWork = () => {
  return (
    <div className="c-featured-work">
      <h6 className="c-featured-work__title">Recent Publications</h6>
      <Grid numOfCols={3}>
        {FEATURED_WORK.map((item: TeaserItem, index: number) => (
          <Teaser key={index} {...item} />
        ))}
      </Grid>
    </div>
  )
}