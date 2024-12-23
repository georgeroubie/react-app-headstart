import { describe, expect, it, render, screen } from '@utils/test-utils';
import Home from '.';

describe('<Home />', () => {
  it('should load the page title', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'React boilerplate' })).toBeVisible();
  });
});
