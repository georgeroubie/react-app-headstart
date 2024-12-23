import c from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './Hyperlink.module.scss';

type Props = {
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};
const Hyperlink = ({ className, href, target, rel = 'noreferrer', children }: Props): ReactElement => {
  return (
    <a className={c(styles.link, className)} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default Hyperlink;
