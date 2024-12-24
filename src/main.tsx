import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/animations.scss';
import './styles/base.scss';
import './styles/normalize.scss';
import './styles/typography.scss';
import './styles/variables.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
