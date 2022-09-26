import React, { FC, MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { formatProps, useStyles } from 'styles';
import { PikassoStatusButtonReactProps } from '@/types';
import useEnvironment from '@/hooks/use-environment';
import { LIB_VERSION } from '@/utils/version';
import {
  clientNames,
  pikassoStatusButtonService,
  pikassoStatusService,
  onboardingRequestStatusResponse,
  brandLogo,
} from '@pikasso-sdk/core';

export const PikassoStatusButton: FC<PikassoStatusButtonReactProps> = ({
  className,
  disabled,
  onClick,
  style,
  tabIndex,
  theme = 'dark',
  clientId,
  auctionId,
  platformId,
  mintConfig,
  environment,
  ...props
}) => {
  const [status, setStatus] = useState(onboardingRequestStatusResponse.WAITING_SUBMISSION);
  const { isServerSideRendering } = useEnvironment();

  const { goToOnboarding, fetchClientIntegration } = pikassoStatusService({
    libVersion: LIB_VERSION,
    clientId,
    environment,
    platformId,
    auctionId,
    mintConfig,
    setStatus,
    clientName: clientNames.react,
  });
  const { getButtonText, isButtonDisabled, handleClick } = pikassoStatusButtonService({ onClick });

  const _handleClick: MouseEventHandler<HTMLButtonElement> = (e) => handleClick(e, status, goToOnboarding);

  useEffect(() => {
    fetchClientIntegration();

    const interval = setInterval(() => {
      fetchClientIntegration();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const classes = useStyles(formatProps(theme));

  const content = useMemo(() => {
    return <span className={classes.pikassoParagraph}>{getButtonText(status)}</span>;
  }, [status]);

  return (
    <>
      {!isServerSideRendering && (
        <button
          className={`${classes.pikassoButton} ${className || ''}`}
          disabled={isButtonDisabled(status)}
          style={{ ...style }}
          tabIndex={tabIndex}
          onClick={_handleClick}
          {...props}
        >
          <img className={classes.pikassoImg} src={brandLogo} alt="Pikasso logo" />
          {content}
        </button>
      )}
    </>
  );
};
