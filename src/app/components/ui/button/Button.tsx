import SpinnerIcon from '@app/components/icons/SpinnerIcon';
import c from 'clsx';
import { ReactElement, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import styles from './Button.module.scss';
import { ButtonSize, ButtonType, ButtonVariation } from './constants';

type Props = {
  className?: string;
  type?: ButtonType;
  variation?: ButtonVariation;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
  onClick?: (ev?: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  className,
  type = ButtonType.Button,
  variation,
  disabled = false,
  size,
  isLoading = false,
  children,
  onClick,
}: Props): ReactElement => {
  return (
    <button
      className={c(styles.button, size && styles[size], variation && styles[variation], className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <SpinnerIcon className={styles.spinner} /> : <span className={styles.label}>{children}</span>}
    </button>
  );
};

export default Button;
