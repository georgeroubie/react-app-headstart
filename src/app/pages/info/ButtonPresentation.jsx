/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import Button from '../../components/ui/Button';
import SelectInput from '../../components/ui/SelectInput';

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: { spacing } }) => spacing.large};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const ButtonPresentation = () => {
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
  ];

  return (
    <>
      <Subtitle>Button component</Subtitle>
      <Controls>
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
      </Controls>
      <Button size={size} variation={variation} disabled={disabled === 'yes'} isLoading={isLoading === 'yes'}>
        I am a button
      </Button>
    </>
  );
};

export default ButtonPresentation;
