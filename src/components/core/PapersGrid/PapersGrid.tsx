import './styles.scss';
import { Grid } from 'components/layouts';
import { TeaserItem } from 'types';
import { Teaser } from '../Teaser';

type Props = {
  title?: string;
  content: any[];
  cols: 1 | 2 | 3 | 4 | 6;
  align?: 'right' | 'center' | 'left';
  decorated?: boolean;
}
export const PapersGrid = ({ title, content, cols = 1, align = 'left', decorated = false }: Props) => {
  return (
    <div className="c-papers-grid">
      {title && <h6 className={[
        'c-papers-grid__title',
        decorated ? 'is-decorated' : ''
      ].join(' ').trim()}>{title}</h6>}
      <Grid numOfCols={cols}>
        {content.map((item: TeaserItem, index: number) => (
          <Teaser align={align} key={index} {...item} />
        ))}
      </Grid>
    </div>
  )
}