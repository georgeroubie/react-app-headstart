import Subtitle from '@app/components/typography/subtitle/Subtitle';
import Button from '@app/components/ui/button/Button';
import { ButtonSize, ButtonVariation } from '@app/components/ui/button/constants';
import SelectInput from '@app/components/ui/select-input/SelectInput';
import { ReactElement, useState } from 'react';
import styles from './ButtonPresentation.module.scss';

const ButtonPresentation = (): ReactElement => {
  const [size, setSize] = useState('normal');
  const [variation, setVariation] = useState('primary');
  const [disabled, setDisabled] = useState('no');
  const [isLoading, setIsLoading] = useState('no');

  const sizeOptions = [
    {
      value: 'small',
      label: 'Small',
    },
    {
      value: 'normal',
      label: 'Normal',
    },
    {
      value: 'large',
      label: 'Large',
    },
  ];

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

  const variationOptions = [
    {
      value: 'primary',
      label: 'Primary',
    },
    {
      value: 'secondary',
      label: 'Secondary',
    },
    {
      value: 'info',
      label: 'Info',
    },
    {
      value: 'error',
      label: 'Error',
    },
  ];

  return (
    <>
      <Subtitle>Button component</Subtitle>
      <div className={styles.controls}>
        <SelectInput id="size" selectedValue={size} options={sizeOptions} onChange={setSize}>
          Size:
        </SelectInput>

        <SelectInput id="disabled" selectedValue={disabled} options={booleanOptions} onChange={setDisabled}>
          Disabled:
        </SelectInput>

        <SelectInput id="variation" selectedValue={variation} options={variationOptions} onChange={setVariation}>
          Variation:
        </SelectInput>

        <SelectInput id="loading" selectedValue={isLoading} options={booleanOptions} onChange={setIsLoading}>
          Loading:
        </SelectInput>
      </div>
      <Button
        size={size as ButtonSize}
        variation={variation as ButtonVariation}
        disabled={disabled === 'yes'}
        isLoading={isLoading === 'yes'}
      >
        I am a button
      </Button>
    </>
  );
};

export default ButtonPresentation;
