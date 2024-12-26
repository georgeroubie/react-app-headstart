import { ROUTES } from '@app/routes/routes';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/react.svg';
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
