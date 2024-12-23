import { ReactElement } from 'react';
import BaseIcon from './BaseIcon';

type Props = {
  className?: string;
  width?: string;
  height?: string;
};

const BarsIcon = ({ className, width, height }: Props): ReactElement => (
  <BaseIcon className={className} width={width} height={height} viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
    />
  </BaseIcon>
);

export default BarsIcon;
