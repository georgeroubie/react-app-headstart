import SpinnerIcon from '@app/components/icons/SpinnerIcon';
import { ReactElement, ReactNode, Suspense } from 'react';
import styles from './RoutingLoader.module.scss';

type Props = {
  children: ReactNode;
};

const RoutingLoader = ({ children }: Props): ReactElement => {
  return (
    <Suspense
      fallback={
        <div className={styles.wrapper}>
          <SpinnerIcon />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default RoutingLoader;
