import { baseUrls, openApiUrls } from '@/types';

export function getEnvironmentBaseUrl(environment = ''): string {
  const productionValues = ['prod', 'production'];

  if (environment === 'staging') {
    return baseUrls.staging;
  }

  if (productionValues.includes(environment) || !environment) {
    return baseUrls.production;
  }

  return baseUrls.dev;
}

export function getEnvironmentOpenApiUrls(environment = ''): string {
  if (environment === 'staging') {
    return openApiUrls.staging;
  }

  if (environment === 'production') {
    return openApiUrls.production;
  }

  return openApiUrls.dev;
}

export const brandLogo = 'https://builder.pikasso.xyz/assets/image/logo-icon-only.svg';
