import { PATHS } from '../utils/enum';
import { Navigate } from 'react-router-dom';
import Pagination from '../pages/Pagination';
import CustomSelect from '../pages/CustomSelect';
import Accordion from '../pages/Accordion';

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

const { ROOT, PAGINATION, CUSTOMSELECT, ACCORDION } = PATHS;

export const ROUTES: AppRoute[] = [
  {
    path: ROOT,
    element: <Pagination />,
  },
  {
    path: PAGINATION,
    element: <Pagination />,
  },
  {
    path: CUSTOMSELECT,
    element: <CustomSelect />,
  },
  {
    path:ACCORDION ,
    element: <Accordion />,
  },
  {
    path: '*',
    element: <Navigate to={PAGINATION} replace />,
  },
];
