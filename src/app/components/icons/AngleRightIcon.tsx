import { ReactElement } from 'react';
import BaseIcon from './BaseIcon';

type Props = {
  className?: string;
  width?: string;
  height?: string;
};

const AngleRightIcon = ({ className, width, height }: Props): ReactElement => (
  <BaseIcon className={className} width={width} height={height} viewBox="0 0 192 512">
    <path
      fill="currentColor"
      d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
    />
  </BaseIcon>
);

export default AngleRightIcon;
