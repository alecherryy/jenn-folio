import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { Link } from "types";
import { DownloadCV } from "../DownloadCV";
import './styles.scss';

/**
 * Button component
 */
type Props = {
  modifierClasses?: string
  items: Link[],
}
export const Menu = ({ modifierClasses = '', items }: Props) => {
  const getActiveClass = (navData: any) => {
    return navData.isActive ? 'c-menu__link is-active' : 'c-menu__link';
  }

  return (
    <Slide direction="right">
      <nav className={[
        'c-menu',
        modifierClasses
      ].join(' ').trim()}>
        <ul className="c-menu__menu">
          {items.map((item: Link) => (
            <li className="c-menu__item" key={item.text}>
              <NavLink
                className={(navData: any) => getActiveClass(navData)}
                to={item.path}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
          <li className="c-menu__item">
            <DownloadCV modifierClasses="c-download-cv--boxed" />
          </li>
        </ul>
      </nav>
    </Slide>
  )
}