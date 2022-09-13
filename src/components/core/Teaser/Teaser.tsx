import './styles.scss';
import { TeaserItem } from "types";

/**
 * Teaser component
 */
type Props = TeaserItem & {
  align?: 'right' | 'left' | 'center';
};
export const Teaser = ({ align = 'right', ...rest }: Props) => {
  // const navigate = useNavigate();
  return (
    <div className="c-teaser">
      <span className="c-teaser__date">{rest.date}</span>
      <h5 className="c-teaser__title">{rest.title}</h5>
      {rest.subtitle}
      {rest.path && (
        <div className={[
          'c-teaser__bottom',
          `u-align-${align}`
        ].join(' ').trim()}>
          <a className="u-button u-button--text" href={rest.path} target={rest.newTab ? '_blank' : ''} download={rest.download}>Read</a>
        </div>
      )}
    </div>
  )
}