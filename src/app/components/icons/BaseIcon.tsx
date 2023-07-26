import React from 'react';

type Props = {
  className?: string;
  viewBox: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
};

const BaseIcon = ({ className = '', viewBox, width, height, children }: Props): React.ReactElement => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
