import PageWrapper from '@app/components/layout/page-wrapper/PageWrapper';
import Title from '@app/components/typography/title/Title';
import Divider from '@app/components/ui/divider/Divider';
import { ReactElement } from 'react';
import ButtonPresentation from './button/ButtonPresentation';
import CheckboxPresentation from './checkbox/CheckboxPresentation';
import DataTablePresentation from './data-table/DataTablePresentation';
import IconsPresentation from './icons/IconsPresentation';
import InputPresentation from './input/InputPresentation';
import LottiePresentation from './lottie/LottiePresentation';

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
