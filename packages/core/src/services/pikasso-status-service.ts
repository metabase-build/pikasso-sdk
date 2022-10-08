import { OnboardingQueryParams, clientNames, customHeaders, onboardingRequestStatusResponse } from '@/types';
import { validateUuid } from '@/utils';
import { getEnvironmentBaseUrl } from '@/utils/ui';

interface PikassoStatusServiceParams {
  libVersion: string;
  nftId: string;
  platformId?: string;
  auctionId?: string;
  mintConfig: any;
  setStatus: any;
  environment?: string;
  clientName: clientNames;
}

const validateNftId = (nftId: string): boolean => {
  try {
    return validateUuid(nftId);
  } catch (e) {
    console.error(e);
    return false;
  }
};

export function pikassoStatusService({
  libVersion,
  nftId,
  platformId,
  auctionId,
  mintConfig,
  setStatus,
  environment,
  clientName,
}: PikassoStatusServiceParams) {
  async function fetchClientIntegration() {
    if (!nftId || nftId === '' || nftId === '<YOUR_CLIENT_ID>') {
      console.error('You must enter your own Pikasso client ID in <PikassoPayButton nftId="XXX">');
      return;
    }

    if (!validateNftId(nftId)) {
      console.error(
        'The nftId passed to is invalid. Make sure to pass the nftId obtained from the pikasso team, with format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX'
      );
      return;
    }

    const baseUrl = getEnvironmentBaseUrl(environment);

    const res = await fetch(`${baseUrl}/api/pikasso/onboarding-requests/${nftId}/status`, {
      headers: {
        [customHeaders.clientVersion]: libVersion,
        [customHeaders.clientName]: clientName,
      },
    });

    if (res.status === 200) {
      const resData: { nftId: string; status: onboardingRequestStatusResponse } = await res.json();

      setStatus(resData.status);
    } else {
      setStatus(onboardingRequestStatusResponse.INVALID);
    }
  }

  const goToOnboarding = () => {
    const baseUrl = getEnvironmentBaseUrl(environment);
    window.open(`${baseUrl}/developers/onboarding?${formatOnboardingQueryParams()}`, '_blank');
  };

  const formatOnboardingQueryParams = () => {
    const onboardingQueryParams: OnboardingQueryParams = {
      nftId: nftId,
    };

    if (platformId) {
      onboardingQueryParams.platformId = platformId;
    }
    if (auctionId) {
      onboardingQueryParams.auctionId = auctionId;
    }
    if (mintConfig) {
      onboardingQueryParams.mintConfig = JSON.stringify(mintConfig);
    }

    return new URLSearchParams(onboardingQueryParams).toString();
  };

  return {
    fetchClientIntegration,
    goToOnboarding,
  };
}
