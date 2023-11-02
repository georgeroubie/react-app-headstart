import { useBodyHeight } from '@hooks';
import { ReactElement, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageWrapper.module.scss';

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props): ReactElement => {
  const location = useLocation();

  useBodyHeight();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
