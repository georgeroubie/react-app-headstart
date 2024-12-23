import c from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './DataTable.module.scss';

type DataTableProps = {
  className?: string;
  stripped?: boolean;
  children?: ReactNode;
};

const DataTable = ({ className, stripped, children }: DataTableProps): ReactElement => {
  return (
    <div className={c(styles.wrapper, className)}>
      <table className={c(styles.table, stripped && styles.stripped)}>{children}</table>
    </div>
  );
};

export default DataTable;
