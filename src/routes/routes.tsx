import { PRIVATE_PATHS, PUBLIC_PATHS } from '../utils/enum';
import { AppRoute } from '../types/route';
import { Navigate } from 'react-router-dom';
import { Signin, Signup } from '../pages/auth';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/app/Dashboard';

const { SIGNIN, SIGNUP, ROOT, LANDING_PAGE } = PUBLIC_PATHS;

const { DASHBOARD } = PRIVATE_PATHS;

export const PUBLIC_ROUTES: AppRoute[] = [
  {
    path: ROOT,
    element: <Signin />,
  },
  {
    path: SIGNIN,
    element: <Signin />,
  },
  {
    path: SIGNUP,
    element: <Signup />,
  },
  {
    path: LANDING_PAGE,
    element: <LandingPage />,
  },
  {
    path: '*',
    element: <Navigate to={SIGNIN} replace />,
  },
];

export const PRIVATE_ROUTES: AppRoute[] = [
  {
    path: DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <Navigate to={DASHBOARD} replace />,
  },
];
