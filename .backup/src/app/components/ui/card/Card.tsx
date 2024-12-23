import c from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './Card.module.scss';

type CardProps = {
  className?: string;
  children: ReactNode;
};

const Card = ({ className, children }: CardProps): ReactElement => {
  return <div className={c(styles.wrapper, className)}>{children}</div>;
};

export default Card;
