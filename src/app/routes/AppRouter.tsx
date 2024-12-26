import { ReactElement, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@app/pages/home/Home';
import RoutingLoader from './loader/RoutingLoader';
import { ROUTES } from './routes';
import AppRoutesWrapper from './wrapper/AppRoutesWrapper';

// Lazy load pages
const ComponentsPresentation = lazy(() => import('@app/pages/components-presentation/ComponentsPresentation'));
const NotFound = lazy(() => import('@app/pages/not-found/NotFound'));

const AppRouter = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppRoutesWrapper />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.COMPONENT_PRESENTATION}
            element={
              <RoutingLoader>
                <ComponentsPresentation />
              </RoutingLoader>
            }
          />
          <Route
            path={ROUTES.NOT_FOUND}
            element={
              <RoutingLoader>
                <NotFound />
              </RoutingLoader>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
