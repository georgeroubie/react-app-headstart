import { PageWrapper } from '@layout-components';
import { Title } from '@typography-components';
import { Divider } from '@ui-components';
import { ReactElement } from 'react';
import ButtonPresentation from './button';
import CheckboxPresentation from './checkbox';
import DataTablePresentation from './data-table/DataTablePresentation';
import IconsPresentation from './icons';
import InputPresentation from './input';
import LottiePresentation from './lottie';

const ComponentsPresentation = (): ReactElement => {
  return (
    <PageWrapper>
      <Title pageTitle="Available components">Available components</Title>
      <IconsPresentation />
      <Divider />
      <ButtonPresentation />
      <Divider />
      <CheckboxPresentation />
      <Divider />
      <InputPresentation />
      <Divider />
      <LottiePresentation />
      <Divider />
      <DataTablePresentation />
    </PageWrapper>
  );
};

export default ComponentsPresentation;
