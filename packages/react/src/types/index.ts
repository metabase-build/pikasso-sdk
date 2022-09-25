import { CSSProperties, MouseEvent } from 'react';
import { MetabasePayButtonProps, BaseButtonProps } from '@pikasso-sdk/core';

export interface MetabasePayButtonReactProps extends MetabasePayButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

export interface MetabaseStatusButtonReactProps extends BaseButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}
