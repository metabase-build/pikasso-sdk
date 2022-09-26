import { OnboardingQueryParams, clientNames, customHeaders, onboardingRequestStatusResponse } from '@/types';
import { validateUuid } from '@/utils';
import { getEnvironmentBaseUrl } from '@/utils/ui';

interface PikassoStatusServiceParams {
  libVersion: string;
  clientId: string;
  platformId?: string;
  auctionId?: string;
  mintConfig: any;
  setStatus: any;
  environment?: string;
  clientName: clientNames;
}

const validateClientId = (clientId: string): boolean => {
  try {
    return validateUuid(clientId);
  } catch (e) {
    console.error(e);
    return false;
  }
};

export function pikassoStatusService({
  libVersion,
  clientId,
  platformId,
  auctionId,
  mintConfig,
  setStatus,
  environment,
  clientName,
}: PikassoStatusServiceParams) {
  async function fetchClientIntegration() {
    if (!clientId || clientId === '' || clientId === '<YOUR_CLIENT_ID>') {
      console.error('You must enter your own Pikasso client ID in <PikassoPayButton clientId="XXX">');
      return;
    }

    if (!validateClientId(clientId)) {
      console.error(
        'The clientId passed to is invalid. Make sure to pass the clientId obtained from the pikasso team, with format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX',
      );
      return;
    }

    const baseUrl = getEnvironmentBaseUrl(environment);

    const res = await fetch(`${baseUrl}/api/metabase/onboardingRequests/${clientId}/status`, {
      headers: {
        [customHeaders.clientVersion]: libVersion,
        [customHeaders.clientName]: clientName,
      },
    });

    if (res.status === 200) {
      const resData: { clientId: string; status: onboardingRequestStatusResponse } = await res.json();

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
      clientId: clientId,
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
