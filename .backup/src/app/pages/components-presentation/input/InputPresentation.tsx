import { Subtitle } from '@typography-components';
import { Input, InputState, SelectInput } from '@ui-components';
import { ReactElement, useState } from 'react';
import styles from './InputPresentation.module.scss';

const InputPresentation = (): ReactElement => {
  const [state, setState] = useState<InputState>(InputState.default);
  const [disabled, setDisabled] = useState('no');
  const [value, setValue] = useState('');

  const booleanOptions = [
    {
      value: 'no',
      label: 'No',
    },
    {
      value: 'yes',
      label: 'Yes',
    },
  ];

  const stateOptions = [
    {
      value: InputState.default,
      label: 'Default',
    },
    {
      value: InputState.success,
      label: 'Success',
    },
    {
      value: InputState.error,
      label: 'Error',
    },
  ];

  return (
    <>
      <Subtitle>Input component</Subtitle>
      <div className={styles.controls}>
        <SelectInput id="disabled" selectedValue={disabled} options={booleanOptions} onChange={setDisabled}>
          Disabled:
        </SelectInput>
        <SelectInput id="state" selectedValue={state} options={stateOptions} onChange={setState}>
          State:
        </SelectInput>
      </div>
      <Input
        value={value}
        label="Input with label"
        state={state}
        disabled={disabled === 'yes'}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <Input
        value={value}
        placeholder="Input with placeholder"
        state={state}
        disabled={disabled === 'yes'}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputPresentation;
