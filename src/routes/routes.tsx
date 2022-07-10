import { About } from "components/pages/About/About";
import { Teaching } from "components/pages/Teaching/Teaching";
import { Home } from "../components/pages/Home/Home";
import { Route } from "../types";

export const ROUTES: Route[] = [
  {
    path: '/',
    element: Home,
    title: 'Homepage'
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