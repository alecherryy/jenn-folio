import './styles.scss';
import { useEffect, useState } from "react";
import { Link } from 'types';
import { Menu, MobileMenu } from 'components/core';
const MENU_ITEMS: Link[] = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'About',
    path: '/about'
  },
  {
    text: 'Research',
    path: '/publications'
  },
  {
    text: 'Teaching',
    path: '/teaching'
  },
  // {
  //   text: 'Resources',
  //   path: '/resources'
  // },
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

    if (screenSize < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return (
    <header className="l-header">
      {isMobile ? (
        <MobileMenu items={MENU_ITEMS} />
      ) : (
        <Menu items={MENU_ITEMS} />
      )}
    </header>
  )
}