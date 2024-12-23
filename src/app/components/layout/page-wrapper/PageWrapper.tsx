import useBodyHeight from '@app/hooks/useBodyHeight/useBodyHeight';
import { ReactElement, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageWrapper.module.scss';

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useBodyHeight();

  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
