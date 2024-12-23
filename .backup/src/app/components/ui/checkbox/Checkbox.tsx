import { CheckIcon } from '@icons';
import c from 'clsx';
import { ChangeEvent, ReactElement } from 'react';
import styles from './Checkbox.module.scss';

type Props = {
  className?: string;
  checked: boolean;
  label: string;
  disabled?: boolean;
  onChange?: (checked: boolean, event?: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ className, checked, label, disabled = false, onChange }: Props): ReactElement => {
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.checked, e);
  }

  return (
    <div className={styles.wrapper}>
      <label className={c(styles.labelContainer, disabled && styles.disabled, className)}>
        <input
          type="checkbox"
          className={styles.input}
          disabled={disabled}
          checked={checked}
          onChange={onChangeHandler}
        />
        <div className={styles.icon}>{checked && <CheckIcon />}</div>
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
