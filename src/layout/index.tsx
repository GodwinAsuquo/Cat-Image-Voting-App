import { ReactNode } from 'react';
import Nav from './Nav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      <div className="ml-10 mt-20">{children}</div>
    </>
  );
};

export default Layout;
