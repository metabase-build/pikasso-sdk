import { onboardingRequestStatusResponse, paymentMethodIsEth, paymentMethods } from '@/types';

interface IProps {
  onClick?: (e: any) => void;
  connecting: boolean;
  paymentMethod?: paymentMethods;
}

export function metabasePayButtonService({ onClick, connecting, paymentMethod }: IProps) {
  const checkProps = ({ collectionTitle, collectionDescription, collectionPhoto }: any) => {
    let _collectionTitle = collectionTitle;
    let _collectionDescription = collectionDescription;
    let _collectionPhoto = collectionPhoto;

    if (collectionTitle === '<TITLE_FOR_YOUR_COLLECTION>') {
      console.warn('No collection title specified. Please add a collection title to your <MetabasePayButton />');
      _collectionTitle = '';
    }
    if (collectionDescription === '<DESCRIPTION_OF_YOUR_COLLECTION>') {
      console.warn(
        'No collection description specified. Please add a collection description to your <MetabasePayButton />',
      );
      _collectionDescription = '';
    }
    if (collectionPhoto === '<OPT_URL_TO_PHOTO_COVER>') {
      console.warn('No collection photo specified. Please add a collection photo to your <MetabasePayButton />');
      _collectionPhoto = '';
    }
    return [_collectionTitle, _collectionDescription, _collectionPhoto];
  };

  const getButtonText = (connecting: boolean) => {
    if (connecting) {
      return 'Connecting...';
    }
    if (paymentMethodIsEth(paymentMethod)) {
      return 'Buy with ETH';
    }
    return 'Buy with credit card';
  };

  const shouldHideButton = ({ hideMintOnInactiveClient, status }: any) => {
    return hideMintOnInactiveClient && status !== onboardingRequestStatusResponse.ACCEPTED;
  };

  const handleClick = (event: any, callback: () => void) => {
    if (onClick) {
      onClick(event);
    }

    if (connecting) {
      return;
    }

    if (!event.defaultPrevented) {
      callback();
    }
  };

  return {
    checkProps,
    getButtonText,
    shouldHideButton,
    handleClick,
  };
}
