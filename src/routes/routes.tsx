import { About, Home, Research, Teaching } from "components/pages";
import { Route } from "types";

export const ROUTES: Route[] = [
  {
    path: '/',
    element: Home,
    title: 'Homepage'
  },
  {
    path: '/publications',
    element: Research,
    title: 'Research'
  },
  {
    path: '/about',
    element: About,
    title: 'About'
  },
  {
    path: '/teaching',
    element: Teaching,
    title: 'Teaching'
  }
];