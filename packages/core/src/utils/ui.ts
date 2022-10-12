import { baseUrls, openApiUrls } from '@/types';

export function getEnvironmentBaseUrl(environment = ''): string {
  if (environment === 'staging') {
    return baseUrls.staging;
  }

  if (environment === 'production') {
    return baseUrls.production;
  }

  if (environment === 'dev') {
    return baseUrls.dev;
  }

  return baseUrls.production;
}

export function getEnvironmentOpenApiUrls(environment = ''): string {
  if (environment === 'staging') {
    return openApiUrls.staging;
  }

  if (environment === 'production') {
    return openApiUrls.production;
  }

  if (environment === 'dev') {
    return openApiUrls.dev;
  }

  return openApiUrls.production;
}

export const brandLogo = 'https://builder.pikasso.xyz/assets/image/logo-icon-only.svg';
