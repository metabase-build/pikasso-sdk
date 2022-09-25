import Link from 'next/link';
import Image from 'next/future/image';
import { Breadcrumbs } from './breadcrumbs';
import { FormSearch } from './form-search';

export const Header = () => {
  return (
    <header>
      <div className="container py-5">
        <div className="gap-7.5 flex items-center">
          <div className="">
            <Link href={'/'} className={'flex'}>
              <span className={'sr-only'}>Home</span>
              <Image src={'/assets/images/logo-pikasso.png'} alt={'Pikasso'} width={136} height={33} />
            </Link>
          </div>
          <div className="">
            <nav>
              <ul className={'gap-7.5 flex items-center font-medium'}>
                <li>
                  <Link href={'/'} className={'hover:text-secondary flex items-center gap-2'}>
                    <span>Explore</span>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className={'hover:text-secondary flex items-center gap-2'}>
                    <span>Collection</span>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className={'hover:text-secondary flex items-center gap-2'}>
                    <span>Resource</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.66666 6.33335L7.99999 9.66669L11.3333 6.33335L4.66666 6.33335Z" fill="currentColor" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="grow">
            <FormSearch />
          </div>

          <div className="">
            <ul className={'flex items-center gap-5'}>
              <li>
                <Link
                  href={'/'}
                  className={
                    'p-1.75 hover:border-secondary focus-visible:border-secondary block rounded-full border focus:outline-none'
                  }
                >
                  <span className={'sr-only'}>Wallets</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.5 12C15.5 11.1716 16.1716 10.5 17 10.5C17.8284 10.5 18.5 11.1716 18.5 12C18.5 12.8284 17.8284 13.5 17 13.5C16.1716 13.5 15.5 12.8284 15.5 12Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.4413 6.67402C19.7836 5.12836 18.3302 4.01723 16.6007 3.83523L15.9488 3.76664C12.6565 3.42018 9.33575 3.44303 6.04851 3.83475L5.61657 3.88622C3.94777 4.08508 2.62552 5.38889 2.40324 7.05473C1.96528 10.337 1.96528 13.663 2.40324 16.9453C2.62552 18.6111 3.94777 19.9149 5.61657 20.1138L6.04851 20.1653C9.33575 20.557 12.6565 20.5798 15.9488 20.2334L16.6007 20.1648C18.3302 19.9828 19.7836 18.8717 20.4413 17.326C21.4806 17.0166 22.2738 16.1156 22.404 15.0024C22.6373 13.0076 22.6373 10.9924 22.404 8.99764C22.2738 7.88442 21.4806 6.98344 20.4413 6.67402ZM15.7918 5.2584C12.6107 4.92365 9.40218 4.94573 6.226 5.32421L5.79406 5.37568C4.80524 5.49351 4.02177 6.26606 3.89007 7.25312C3.46967 10.4038 3.46967 13.5963 3.89007 16.7469C4.02177 17.734 4.80525 18.5065 5.79406 18.6243L6.226 18.6758C9.40218 19.0543 12.6107 19.0764 15.7918 18.7416L16.4437 18.673C17.2942 18.5835 18.0468 18.1643 18.5683 17.542C17.0602 17.6299 15.532 17.5906 14.0417 17.4241C12.7724 17.2822 11.7458 16.2826 11.5961 15.0024C11.3628 13.0076 11.3628 10.9924 11.5961 8.99764C11.7458 7.71738 12.7724 6.71784 14.0417 6.57597C15.532 6.40942 17.0602 6.37012 18.5683 6.45806C18.0468 5.83574 17.2942 5.4165 16.4437 5.327L15.7918 5.2584ZM19.2774 8.01471C19.278 8.01855 19.2786 8.02239 19.2792 8.02623L19.2852 8.06511L19.4839 8.03426C19.5867 8.04444 19.6893 8.05524 19.7917 8.06669C20.3791 8.13234 20.8468 8.59648 20.9141 9.17189C21.1339 11.0509 21.1339 12.9491 20.9141 14.8281C20.8468 15.4035 20.3791 15.8677 19.7917 15.9333C19.6893 15.9448 19.5866 15.9556 19.4839 15.9658L19.2852 15.9349L19.2792 15.9738C19.2786 15.9776 19.278 15.9815 19.2774 15.9853C17.5987 16.1372 15.8772 16.1199 14.2084 15.9333C13.621 15.8677 13.1532 15.4035 13.0859 14.8281C12.8661 12.9491 12.8661 11.0509 13.0859 9.17189C13.1532 8.59648 13.621 8.13234 14.2084 8.06669C15.8772 7.88017 17.5987 7.86285 19.2774 8.01471Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link href={'/'} className={'flex items-center gap-2'}>
                  <span className={'sr-only'}>Account</span>
                  <Image src={'/assets/images/user-1.png'} width={80 / 2} height={80 / 2} alt={'Account'} />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5L12 14.5L17 9.5L7 9.5Z" fill="currentColor" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end top header */}

      <div className="bg-neutral-10">
        <div className="container py-2.5">
          <Breadcrumbs />
        </div>
      </div>
      {/* end breadcrumbs */}
    </header>
  );
};
