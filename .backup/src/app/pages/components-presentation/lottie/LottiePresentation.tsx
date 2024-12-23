import { Subtitle } from '@typography-components';
import { Lottie, LottieAnimations } from '@ui-components';
import { ReactElement } from 'react';

const LottiePresentation = (): ReactElement => {
  return (
    <>
      <Subtitle>Lottie component</Subtitle>
      <Lottie name={LottieAnimations.EmptyState} width={300} height={300} />
    </>
  );
};

export default LottiePresentation;
