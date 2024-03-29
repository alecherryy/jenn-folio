import { PathRouteProps } from "react-router-dom"

// interface for React routes
type RouteProps = PathRouteProps;
type RequiredProps = Required<Pick<RouteProps, 'path'>>;
export type Route = RequiredProps & {
  key?: string;
  title: string;
  exact?: boolean,
  routes?: Route[],
  element: React.ElementType
}
