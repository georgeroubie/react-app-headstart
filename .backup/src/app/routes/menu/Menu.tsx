import { ROUTES } from '@routes/routes';
import { Logo } from '@ui-components';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const menuItems = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.COMPONENT_PRESENTATION, label: 'Available components' },
];

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      {menuItems.map(({ path, label }) => (
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
