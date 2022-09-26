import { CSSProperties, MouseEvent } from 'react';
import { BaseButtonProps, PikassoPayButtonProps } from '@pikasso-sdk/core';

export interface PikassoPayButtonReactProps extends PikassoPayButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

export interface PikassoStatusButtonReactProps extends BaseButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}
