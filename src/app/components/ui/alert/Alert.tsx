import c from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './Alert.module.scss';
import { AlertState } from './constants';

type AlertProps = {
  className?: string;
  state: AlertState;
  children: ReactNode;
};

const Alert = ({ className, state, children }: AlertProps): ReactElement => {
  return (
    <div
      className={c(
        styles.wrapper,
        className,
        state === AlertState.Error && styles.error,
        state === AlertState.Success && styles.success,
      )}
    >
      {children}
    </div>
  );
};

export default Alert;
