import './styles.scss';
import { useNavigate } from "react-router-dom";
import { TeaserItem } from "types";
import { Button } from '../Button/Button';

/**
 * Teaser component
 */
type Props = TeaserItem;
export const Teaser = ({ ...rest }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="c-teaser">
      <span className="c-teaser__date">{rest.date}</span>
      <h5 className="c-teaser__title">{rest.title}</h5>
      {rest.subtitle}
      {rest.path && (
        <div className="c-teaser__bottom">
          <a className="u-button u-button--text" href={rest.path} download={rest.download}>Read</a>
        </div>
      )}
    </div>
  )
}