import LandingPage from '../pages/landingPage';
import MyVotes from '../pages/myVotes';
import CatDetails from '../pages/catDetails';
import { PATHS } from '../utils/enum';
import { Navigate } from 'react-router-dom';

interface AppRoute {
  path: string;
  element: React.ReactNode;
}

const { ROOT, MY_VOTES, CAT_DETAILS } = PATHS;

export const ROUTES: AppRoute[] = [
  {
    path: ROOT,
    element: <LandingPage />,
  },
  {
    path: MY_VOTES,
    element: <MyVotes />,
  },
  {
    path: CAT_DETAILS,
    element: <CatDetails />,
  },
  {
    path: '*',
    element: <Navigate to={ROOT} replace />,
  },
];
