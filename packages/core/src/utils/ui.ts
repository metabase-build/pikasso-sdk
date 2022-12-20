import { baseUrls, openApiUrls } from '@/types';

export function getEnvironmentBaseUrl(environment = ''): string {
  if (environment === 'production') {
    return baseUrls.production;
  }

  if (environment === 'staging') {
    return baseUrls.staging;
  }

  if (environment === 'testnet') {
    return baseUrls.testnet;
  }

  if (environment === 'dev') {
    return baseUrls.dev;
  }

  if (environment === 'local') {
    return baseUrls.local;
  }

  return baseUrls.production;
}

export function getEnvironmentOpenApiUrls(environment = ''): string {
  if (environment === 'production') {
    return openApiUrls.production;
  }

  if (environment === 'staging') {
    return openApiUrls.staging;
  }

  if (environment === 'testnet') {
    return openApiUrls.testnet;
  }

  if (environment === 'dev') {
    return openApiUrls.dev;
  }

  if (environment === 'local') {
    return openApiUrls.local;
  }

  return openApiUrls.production;
}

export const brandLogo = 'https://builder.pikasso.xyz/assets/image/logo-icon-only.svg';
