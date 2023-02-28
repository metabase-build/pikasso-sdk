export enum clientNames {
  react = 'client-sdk-react-ui',
  vanilla = 'client-sdk-vanilla-ui',
  vue = 'client-sdk-vue-ui',
}

export enum baseUrls {
  production = 'https://builder.pikasso.xyz',
  staging = 'https://staging.builder.pikasso.xyz',
  testnet = 'https://testnet.builder.pikasso.xyz',
  dev = 'https://dev.builder.pikasso.xyz',
  local = 'http://localhost:3000',
}

export enum openApiUrls {
  production = 'https://api.pikasso.xyz/v0',
  staging = 'https://staging.api.pikasso.xyz/v0',
  testnet = 'https://testnet.api.pikasso.xyz/v0',
  dev = 'https://dev.api.pikasso.xyz/v0',
  local = 'https://dev.api.pikasso.xyz/v0',
}

export enum customHeaders {
  clientVersion = 'X-Client-Version',
  clientName = 'X-Client-Name',
}

type theme = 'light' | 'dark' | 'primary' | 'secondary' | 'tertiary';

export type paymentMethods = 'fiat' | 'ETH';
export const paymentMethodIsEth = (paymentMethod?: paymentMethods) => paymentMethod === 'ETH';

// TODO: Add more signin methods when needed
export type SigninMethods = 'metamask';

export enum mintingContractTypes {
  CANDY_MACHINE = 'candy-machine',
  SOLANA_AUCTION = 'solana-auction',
  ERC_721 = 'erc-721',
  ERC_1155 = 'erc-1155',
}

export enum onboardingRequestStatusResponse {
  WAITING_SUBMISSION = 'waiting-submission',
  PENDING = 'pending',
  REJECTED = 'rejected',
  ACCEPTED = 'accepted',
  INVALID = 'invalid',
}

export interface PayButtonConfig {
  type: string;

  [propName: string]: any;
}

interface StatusButtonConfig {
  [propName: string]: any;
}

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  nftId: string;
  exchangeId: string;
  refId?: string;
  auctionId?: string;
  theme?: theme;
  platformId?: string;
  mintConfig?: StatusButtonConfig;
  environment?: string;
}

export interface PikassoPayButtonProps extends BaseButtonProps {
  collectionTitle?: string;
  collectionDescription?: string;
  collectionPhoto?: string;
  mintTo?: string;
  emailTo?: string;
  listingId?: string;
  showOverlay?: boolean;
  hideMintOnInactiveClient?: boolean;
  mintConfig?: PayButtonConfig;
  whPassThroughArgs?: any;
  paymentMethod?: paymentMethods;
  preferredSigninMethod?: SigninMethods;
}

export type OnboardingQueryParams = {
  nftId: string;
  exchangeId: string;
  platformId?: string;
  auctionId?: string;
  mintConfig?: string;
};
