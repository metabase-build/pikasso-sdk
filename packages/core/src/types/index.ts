export enum clientNames {
  react = 'client-sdk-react-ui',
  vanilla = 'client-sdk-vanilla-ui',
  vue = 'client-sdk-vue-ui',
}

export enum baseUrls {
  /* TODO: replace latest */
  prod = 'https://pikasso-sdk.vercel.app',
  /* TODO: replace latest */
  staging = 'https://pikasso-sdk-staging.vercel.app',
  dev = 'http://localhost:3000',
}

export enum customHeaders {
  clientVersion = 'X-Client-Version',
  clientName = 'X-Client-Name',
}

type theme = 'light' | 'dark';

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
  clientId: string;
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
  clientId: string;
  platformId?: string;
  auctionId?: string;
  mintConfig?: string;
};
