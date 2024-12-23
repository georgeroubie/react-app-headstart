import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../menu/Menu';

const AppRoutesWrapper = (): ReactElement => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default AppRoutesWrapper;
