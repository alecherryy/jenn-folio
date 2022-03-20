import './styles.scss';
import { useEffect, useState } from "react";
import { Link } from "../../../types";
import { Logo } from "../../core/Logo/Logo";
import { Menu } from "../../core/Menu/Menu";
import { MobileMenu } from "../../core/MobileMenu/MobileMenu";
const MENU_ITEMS: Link[] = [
  {
    text: 'Research',
    path: '/research'
  },
  {
    text: 'Teaching',
    path: '/teaching'
  },
  {
    text: 'Resources',
    path: '/resources'
  },
  {
    text: 'About',
    path: '/about'
  },
]

/**
 * Header layout
 */
const currentScreen = window.innerWidth < 640;
export const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(currentScreen);

  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        checkIfMobile();
      }, 200)
    })
  })
  const checkIfMobile = () => {
    const screenSize = window.innerWidth;

    if (screenSize < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return (
    <header className="l-header">
      <Logo />
      {isMobile ? (
        <MobileMenu items={MENU_ITEMS} />
      ) : (
        <Menu items={MENU_ITEMS} />
      )}
    </header>
  )
}