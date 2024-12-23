import logo from '@images/react.svg';
import { ROUTES } from '@routes/routes';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.scss';

type LogoProps = {
  onClick?: () => void;
};

const Logo = ({ onClick }: LogoProps): ReactElement => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(ROUTES.HOME);
    }
  };

  return <img className={styles.image} src={logo} alt="logo" onClick={handleOnClick} />;
};

export default Logo;
