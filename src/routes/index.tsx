import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import { useRoutes, useLocation } from "react-router-dom";

const PublicRouteWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};
const PrivateRouteWrapper = () => {
  const routes = useRoutes(PRIVATE_ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  return user ? (
    <PrivateRouteWrapper key={location.pathname} />
  ) : (
    <PublicRouteWrapper key={location.pathname} />
  );
};

export default Pages;

//when im setting local storage for user, set user to data?.token
