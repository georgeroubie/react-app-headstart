import Subtitle from '@app/components/typography/subtitle/Subtitle';
import { LottieAnimations } from '@app/components/ui/lottie/constants';
import Lottie from '@app/components/ui/lottie/Lottie';
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
