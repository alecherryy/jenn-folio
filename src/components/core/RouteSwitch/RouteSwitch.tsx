import { Route, Routes } from "react-router-dom";
import { Route as RouteType } from "../../../types";
import { ROUTES } from "../../../routes";

/**
 * RouteSwitch component
 */
export const RouteSwitch = () => {
  return (
    <Routes>
      {ROUTES.map((route: RouteType, key: number) => {
        return (
          <Route
            key={key}
            path={route.path}
            element={<route.element title={route.title} routes={route.routes} />}
          />
        )
      })}
    </Routes>
  );
};