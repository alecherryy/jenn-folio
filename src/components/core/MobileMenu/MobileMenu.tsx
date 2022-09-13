import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "../../../types";
import { fadeIn, fadeOut } from "../../../utils/utils";
import { Button } from "../Button";
import { DownloadCV } from "../DownloadCV/DownloadCV";
import './styles.scss';

/**
 * Mobile menu component
 */
type Props = {
  modifierClasses?: string
  items: Link[],
}
export const MobileMenu = ({ modifierClasses = '', items }: Props) => {
  const [open, setOpen] = useState(false);

  const getActiveClass = (navData: any) => {
    return navData.isActive ? 'c-mobile-menu__link is-active' : 'c-mobile-menu__link';
  }

  const closeMenu = (e: any) => {
    const menu = e.target.parentNode.parentNode;

    fadeOut(menu);
    setOpen(false);
  }

  const toggleMenuDisplay = (e: any) => {
    const menu = e.target.nextElementSibling;
    if (open) {
      fadeOut(menu);
    } else {
      fadeIn(menu);
    }
    setOpen(!open);
  }
  return (
    <nav className={[
      'c-mobile-menu',
      modifierClasses
    ].join(' ').trim()}>
      <Button text={open ? 'Close' : 'Menu'} onClick={(e: any) => toggleMenuDisplay(e)} modifierClasses="c-button--text c-mobile-menu__btn" />
      <ul className="c-mobile-menu__menu" style={{ display: 'none', opacity: '0' }}>
        {items.map((item: Link, index: number) => (
          <li className="c-mobile-menu__item" key={index}>
            <NavLink
              onClick={(e: any) => closeMenu(e)}
              className={(navData: any) => getActiveClass(navData)}
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li className="c-mobile-menu__item u-mt-6">
          <DownloadCV modifierClasses="c-download-cv--boxed" isMobile />
        </li>
      </ul>
    </nav>
  )
}