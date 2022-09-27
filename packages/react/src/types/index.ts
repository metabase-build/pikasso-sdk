import * as React from 'react';
import { BaseButtonProps, PikassoPayButtonProps } from '@pikasso-sdk/core';

export interface PikassoPayButtonReactProps extends PikassoPayButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export interface PikassoStatusButtonReactProps extends BaseButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
