import { Grid } from 'components/layouts';
import { TeaserItem } from 'types';
import { Teaser } from '../Teaser';
import './styles.scss';

type Props = {
  title?: string;
  content: any[];
  cols: 1 | 2 | 3 | 4 | 6;
  align?: 'right' | 'center' | 'left';
}
export const PapersGrid = ({ title, content, cols = 1, align = 'left' }: Props) => {
  return (
    <div className="c-content-grid">
      {title && <h6 className="u-mt-3">{title}</h6>}
      <Grid numOfCols={cols}>
        {content.map((item: TeaserItem, index: number) => (
          <Teaser align={align} key={index} {...item} />
        ))}
      </Grid>
    </div>
  )
}