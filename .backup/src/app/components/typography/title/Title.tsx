import c from 'clsx';
import { CONSTANTS } from 'constants';
import { ReactElement, ReactNode, useEffect } from 'react';
import styles from './Title.module.scss';

type Props = {
  className?: string;

  pageTitle?: string;
  children: ReactNode;
};

const Title = ({ className, pageTitle, children }: Props): ReactElement => {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${CONSTANTS.APP_NAME} - ${pageTitle}`;
    } else {
      document.title = CONSTANTS.APP_NAME;
    }
  }, [pageTitle]);

  return <h1 className={c(styles.title, className)}>{children}</h1>;
};

export default Title;
