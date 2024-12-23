import c from 'clsx';
import { ChangeEvent, ReactElement } from 'react';
import styles from './Input.module.scss';
import { InputMode, InputState, InputType } from './constants';

type Props = {
  className?: string;
  id?: string;
  type?: keyof typeof InputType;
  name?: string;
  value?: string;
  label?: string;
  state?: InputState;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  clearable?: boolean;
  inputMode?: InputMode;
  pattern?: string;
  autoComplete?: string;
  readonly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  className,
  id,
  value = '',
  state = InputState.default,
  label,
  disabled,
  name,
  inputMode,
  pattern,
  placeholder,
  required,
  autoComplete,
  readonly,
  type = InputType.text,
  onChange,
}: Props): ReactElement => {
  const inputPlaceholder = !label ? placeholder : '';

  return (
    <div className={c(styles.wrapper, styles[state], disabled && styles.disabled, className)}>
      <div className={c(styles.container, Boolean(value) && styles.withValue, Boolean(label) && styles.withLabel)}>
        <input
          className={styles.input}
          id={id || name}
          value={value}
          disabled={disabled}
          name={name}
          inputMode={inputMode}
          pattern={pattern}
          placeholder={inputPlaceholder}
          required={required}
          type={type}
          autoComplete={autoComplete}
          readOnly={readonly}
          onChange={onChange}
        />
        {label && (
          <label className={styles.label} htmlFor={id || name}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default Input;
