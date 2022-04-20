import { Fade } from "react-awesome-reveal";
import { Link } from "../../../types";
import './styles.scss';

/**
 * Social menu component
 */
const ITEMS: Link[] = [
  {
    text: 'twitter',
    path: 'https://github.com/Stsumej'
  },
  {
    text: 'github',
    path: 'https://github.com/Stsumej'
  },
  {
    text: 'linkedin',
    path: 'https://www.linkedin.com/in/stsumej/'
  },
]
export const Social = () => {
  return (
    <Fade delay={1000} duration={1000}>
      <div className="c-social">
        <span className="c-social__label">Follow me</span>
        <ul className="c-social__list">
          {ITEMS.map((item: Link) => (
            <li className="c-social__item" key={item.text}>
              <a className={`c-social__link c-social__link--${item.text}`} href={item.path} rel="noreferrer" target="_blank">{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  )
}