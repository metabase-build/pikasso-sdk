import { onboardingRequestStatusResponse } from '@/types';

interface PikassoStatusButtonServiceProps {
  onClick?: (e: any) => void;
}

export function pikassoStatusButtonService({ onClick }: PikassoStatusButtonServiceProps) {
  const getButtonText = (status: onboardingRequestStatusResponse) => {
    switch (status) {
      case onboardingRequestStatusResponse.INVALID:
        return 'Invalid nftId';
      case onboardingRequestStatusResponse.WAITING_SUBMISSION:
        return 'Click here to setup Pikasso';
      case onboardingRequestStatusResponse.PENDING:
        return 'Your application is under review';
      case onboardingRequestStatusResponse.ACCEPTED:
        return "You're good to go!";
      case onboardingRequestStatusResponse.REJECTED:
        return 'Your application was rejected';
    }
  };

  const isButtonDisabled = (status: onboardingRequestStatusResponse) =>
    status !== onboardingRequestStatusResponse.WAITING_SUBMISSION;

  const handleClick = (event: any, status: onboardingRequestStatusResponse, goToOnboarding: () => void) => {
    if (onClick) {
      onClick(event);
    }
    if (status === onboardingRequestStatusResponse.WAITING_SUBMISSION) {
      goToOnboarding();
    }
  };

  return {
    getButtonText,
    isButtonDisabled,
    handleClick,
  };
}
