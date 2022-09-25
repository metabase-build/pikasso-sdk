import React, { FC, Fragment, MouseEvent, useEffect, useMemo } from 'react';
import { useState } from 'react';

import {
  clientNames,
  metabaseModalService,
  metabasePayButtonService,
  metabaseStatusService,
  mintingContractTypes,
  onboardingRequestStatusResponse,
  brandLogo,
} from '@pikasso-sdk/core';

import { formatProps, useStyles } from 'styles';
import { MetabasePayButtonReactProps } from '@/types';
import useEnvironment from '@/hooks/use-environment';
import { LIB_VERSION } from '@/utils/version';

const defaultMintConfig: any = {
  type: mintingContractTypes.CANDY_MACHINE,
};

export const MetabasePayButton: FC<MetabasePayButtonReactProps> = ({
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

  const { fetchClientIntegration } = metabaseStatusService({
    libVersion: LIB_VERSION,
    clientId,
    environment,
    auctionId,
    mintConfig,
    setStatus,
    clientName: clientNames.react,
  });

  const { connect } = metabaseModalService({
    clientId,
    showOverlay,
    setConnecting,
    libVersion: LIB_VERSION,
    environment,
    clientName: clientNames.react,
  });

  const { checkProps, getButtonText, shouldHideButton, handleClick } = metabasePayButtonService({
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
      <span className={classes.metabaseParagraph} role="button-paragraph">
        {getButtonText(connecting)}
      </span>
    );
  }, [classes.metabaseParagraph, connecting, getButtonText]);

  if (shouldHideButton({ hideMintOnInactiveClient, status })) {
    return null;
  }

  return (
    <Fragment>
      {!isServerSideRendering && (
        <button
          className={`${classes.metabaseButton} ${className || ''}`}
          disabled={disabled}
          style={{ ...style }}
          tabIndex={tabIndex}
          onClick={_handleClick}
          {...rest}
        >
          <img className={classes.metabaseImg} src={brandLogo} alt="Metabase logo" />
          {content}
        </button>
      )}
    </Fragment>
  );
};
