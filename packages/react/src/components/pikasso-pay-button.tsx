import React, { FC, Fragment, MouseEvent, useEffect, useMemo } from 'react';
import { useState } from 'react';
import { formatProps, useStyles } from 'styles';
import useEnvironment from '@/hooks/use-environment';
import { LIB_VERSION } from '@/utils/version';
import {
  clientNames,
  pikassoModalService,
  pikassoPayButtonService,
  pikassoStatusService,
  mintingContractTypes,
  onboardingRequestStatusResponse,
  brandLogo,
} from '@pikasso-sdk/core';
import { PikassoPayButtonReactProps } from '@/types';

const defaultMintConfig: any = {
  type: mintingContractTypes.CANDY_MACHINE,
};

export const PikassoPayButton: FC<PikassoPayButtonReactProps> = ({
  className,
  disabled,
  onClick,
  style,
  tabIndex,
  theme = 'dark',
  collectionTitle,
  collectionDescription,
  collectionPhoto,
  mintTo,
  emailTo,
  listingId,
  clientId,
  auctionId,
  hideMintOnInactiveClient = false,
  showOverlay = true,
  mintConfig = defaultMintConfig,
  whPassThroughArgs,
  environment,
  paymentMethod,
  preferredSigninMethod,
  ...rest
}) => {
  const [connecting, setConnecting] = useState(false);
  const [status, setStatus] = useState(onboardingRequestStatusResponse.WAITING_SUBMISSION);
  const { isServerSideRendering } = useEnvironment();

  const { fetchClientIntegration } = pikassoStatusService({
    libVersion: LIB_VERSION,
    clientId,
    environment,
    auctionId,
    mintConfig,
    setStatus,
    clientName: clientNames.react,
  });

  const { connect } = pikassoModalService({
    clientId,
    showOverlay,
    setConnecting,
    libVersion: LIB_VERSION,
    environment,
    clientName: clientNames.react,
  });

  const { checkProps, getButtonText, shouldHideButton, handleClick } = pikassoPayButtonService({
    onClick,
    connecting,
    paymentMethod,
  });

  const [newCollectionTitle, newCollectionDescription, newCollectionPhoto] = checkProps({
    collectionTitle,
    collectionPhoto,
    collectionDescription,
  });
  collectionTitle = newCollectionTitle;
  collectionDescription = newCollectionDescription;
  collectionPhoto = newCollectionPhoto;

  useEffect(() => {
    if (hideMintOnInactiveClient) {
      fetchClientIntegration();
    }
  }, [status]);

  const _handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    return handleClick(event, () => {
      connect(
        mintConfig,
        collectionTitle,
        collectionDescription,
        collectionPhoto,
        mintTo,
        emailTo,
        listingId,
        whPassThroughArgs,
        paymentMethod,
        preferredSigninMethod,
      );
    });
  };

  const classes = useStyles(formatProps(theme));

  const content = useMemo(() => {
    return (
      <span className={classes.pikassoParagraph} role="button-paragraph">
        {getButtonText(connecting)}
      </span>
    );
  }, [classes.pikassoParagraph, connecting, getButtonText]);

  if (shouldHideButton({ hideMintOnInactiveClient, status })) {
    return null;
  }

  return (
    <Fragment>
      {!isServerSideRendering && (
        <button
          className={`${classes.pikassoButton} ${className || ''}`}
          disabled={disabled}
          style={{ ...style }}
          tabIndex={tabIndex}
          onClick={_handleClick}
          {...rest}
        >
          <img className={classes.pikassoImg} src={brandLogo} alt="Pikasso logo" />
          {content}
        </button>
      )}
    </Fragment>
  );
};
