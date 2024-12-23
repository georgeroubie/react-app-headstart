import Menu from '@routes/menu';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const AppRoutesWrapper = (): ReactElement => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default AppRoutesWrapper;
