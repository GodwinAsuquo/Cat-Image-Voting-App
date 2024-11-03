import LandingPage from '../pages/landingPage';
import { PATHS } from '../utils/enum';
import { Navigate } from 'react-router-dom';

interface AppRoute {
  path: string;
  element: React.ReactNode;
  children?: [
    {
      path: string;
      element: React.ReactNode;
    }
  ];
}

const { ROOT } = PATHS;

export const ROUTES: AppRoute[] = [
  {
    path: ROOT,
    element: <LandingPage />,
  },
  {
    path: '*',
    element: <Navigate to={ROOT} replace />,
  },
];
