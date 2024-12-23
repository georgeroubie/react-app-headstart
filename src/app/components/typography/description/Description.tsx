import c from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './Description.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

const Description = ({ className, children }: Props): ReactElement => {
  return <div className={c(styles.wrapper, className)}>{children}</div>;
};

export default Description;
