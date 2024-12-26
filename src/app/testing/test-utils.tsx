import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router';

beforeAll(() => {
  window.scrollTo = vitest.fn();
});

function customRender(ui: ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...options,
  });
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
