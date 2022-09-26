import { baseUrls } from '@/types';

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

export const brandLogo = 'https://metabase-sdk.vercel.app/assets/image/logo-icon-only.svg';
