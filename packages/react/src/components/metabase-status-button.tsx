import React, { FC, MouseEventHandler, useEffect, useMemo, useState } from 'react';

import {
  clientNames,
  metabaseStatusButtonService,
  metabaseStatusService,
  onboardingRequestStatusResponse,
  brandLogo,
} from '@pikasso-sdk/core';

import { formatProps, useStyles } from 'styles';
import { MetabaseStatusButtonReactProps } from '@/types';
import useEnvironment from '@/hooks/use-environment';
import { LIB_VERSION } from '@/utils/version';

export const MetabaseStatusButton: FC<MetabaseStatusButtonReactProps> = ({
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

  const { goToOnboarding, fetchClientIntegration } = metabaseStatusService({
    libVersion: LIB_VERSION,
    clientId,
    environment,
    platformId,
    auctionId,
    mintConfig,
    setStatus,
    clientName: clientNames.react,
  });
  const { getButtonText, isButtonDisabled, handleClick } = metabaseStatusButtonService({ onClick });

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
    return <span className={classes.metabaseParagraph}>{getButtonText(status)}</span>;
  }, [status]);

  return (
    <>
      {!isServerSideRendering && (
        <button
          className={`${classes.metabaseButton} ${className || ''}`}
          disabled={isButtonDisabled(status)}
          style={{ ...style }}
          tabIndex={tabIndex}
          onClick={_handleClick}
          {...props}
        >
          <img className={classes.metabaseImg} src={brandLogo} alt="Metabase logo" />
          {content}
        </button>
      )}
    </>
  );
};
