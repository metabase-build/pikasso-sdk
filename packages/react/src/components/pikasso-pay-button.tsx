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
  nftId,
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
    nftId,
    environment,
    auctionId,
    mintConfig,
    setStatus,
    clientName: clientNames.react,
  });

  const { connect } = pikassoModalService({
    nftId,
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
          <svg
            className={classes.pikassoImg}
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M228.155 313.01C204.119 345.214 173.829 360.616 159.481 360.616C146.997 360.616 141.699 348.108 150.848 309.65C158.525 277.937 171.99 226.481 181.114 187.557C183.051 178.409 182.561 174.092 179.691 174.092C174.786 174.092 160.462 183.706 147.954 195.724L143.539 186.895C166.128 162.368 196.982 138.038 212.36 138.038C224.378 138.038 224.869 154.397 216.211 189.961C207.087 224.568 195.535 273.13 186.779 307.247C183.395 320.221 183.395 325.519 186.779 325.519C191.684 325.519 204.561 318.774 221.386 300.992L228.155 313.01Z"
              fill="currentColor"
            />
            <path
              d="M241.62 61.1229C241.62 76.0351 231.05 89.0096 216.137 89.0096C213.295 89.0915 210.466 88.5834 207.83 87.5172C205.193 86.451 202.806 84.8499 200.82 82.8149C198.833 80.78 197.29 78.3553 196.288 75.694C195.285 73.0327 194.845 70.1925 194.996 67.3527C194.996 54.8441 204.61 39 221.975 39C234.876 39.0245 241.62 49.1049 241.62 61.1229Z"
              fill="currentColor"
            />
            <path
              d="M221.435 300.992C252.02 262.658 73.2948 271.07 143.465 186.895L147.88 195.725C97.4289 249.953 284.149 240.682 228.155 313.01L221.435 300.992Z"
              fill="currentColor"
            />
          </svg>

          {/*<img className={classes.pikassoImg} src={brandLogo} alt="Pikasso logo" />*/}
          {content}
        </button>
      )}
    </Fragment>
  );
};
