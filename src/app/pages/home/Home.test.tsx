import { render, screen } from '@app/testing/test-utils';
import Home from './Home';

describe('<Home />', () => {
  it('should load the page title', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'React boilerplate' })).toBeVisible();
  });
});
