import Layout from '../layout';
import { ROUTES } from './routes';
import { useRoutes, useLocation } from 'react-router-dom';

const RouteWrapper = () => {
  return useRoutes(ROUTES);
};

const Pages = () => {
  const location = useLocation();
  return (
    <Layout>
      <RouteWrapper key={location.pathname} />
    </Layout>
  );
};

export default Pages;
