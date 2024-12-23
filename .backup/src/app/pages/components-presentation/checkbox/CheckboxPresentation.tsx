import { Subtitle } from '@typography-components';
import { Checkbox } from '@ui-components';
import { ReactElement, useMemo, useState } from 'react';
import styles from './CheckboxPresentation.module.scss';

const CheckboxPresentation = (): ReactElement => {
  const [checked, setChecked] = useState(true);

  const label = useMemo(() => {
    if (checked) {
      return 'I am checked';
    }
    return 'I am not checked';
  }, [checked]);

  return (
    <>
      <Subtitle>Checkbox component</Subtitle>
      <Checkbox className={styles.checkbox} label={label} checked={checked} onChange={setChecked} />
      <Checkbox className={styles.checkbox} label="I am disabled and not checked" checked={false} disabled />
      <Checkbox className={styles.checkbox} label="I am disabled and checked" checked disabled />
    </>
  );
};

export default CheckboxPresentation;
