import { About } from "components/pages/About/About";
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
  }
];