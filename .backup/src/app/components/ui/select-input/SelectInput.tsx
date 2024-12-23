import c from 'clsx';
import { ChangeEvent, ReactElement, ReactNode } from 'react';
import styles from './SelectInput.module.scss';

type Props = {
  className?: string;
  id: string;
  selectedValue: string;
  options: {
    value: string;
    label: string;
  }[];
  children: ReactNode;
  onChange: (value: any) => void;
};

const SelectInput = ({ className, id, selectedValue, options, children, onChange }: Props): ReactElement => {
  function onChangeHandler({ target }: ChangeEvent<HTMLSelectElement>) {
    onChange(target.value);
  }

  return (
    <div className={c(styles.wrapper, className)}>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <select className={styles.select} name={id} id={id} value={selectedValue} onChange={onChangeHandler}>
        {options.map(({ value, label }, index) => (
          <option key={`${value}_${index}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
