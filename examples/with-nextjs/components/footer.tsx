import Link from 'next/link';
import Image from 'next/future/image';
import { FormSubscribe } from './form-subscribe';

export const Footer = () => {
  return (
    <footer className={'bg-secondary text-neutral-30 mt-20 pt-2.5 pb-6'}>
      <div className="container">
        <div className="divide-secondary-40 divide-y">
          <div className="py-7.5 grid grid-cols-3 gap-4">
            <div className="">
              <div className="">
                <Link href={'/'} className={'block'}>
                  <Image src={'/assets/images/logo-pikasso-white.png'} width={123} height={31} alt={'Pikasso'} />
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Image src={'/assets/images/logo-starkware.png'} width={48} height={48} alt={'Starkware'} />
                <div className="space-y-0.5">
                  <div>Received grant from</div>
                  <div className="">
                    <Image src={'/assets/images/logo-starkware-text.png'} width={163} height={24} alt={'Starkware'} />
                  </div>
                </div>
              </div>
              <div className="text-secondary-10 mt-6">Pikasso is re-branded from Metabase</div>
            </div>
            <div className="gap-y-7.5 grid grid-cols-2">
              <div className="row-span-2 space-y-4">
                <h2 className={'text-neutral-0 font-bold'}>Marketplace</h2>
                <nav>
                  <ul className={'space-y-3 text-sm font-medium'}>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>All NFTs</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Art</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Photography</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Metaverses</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Music</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Sports</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Games</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end Marketplace */}

              <div className="space-y-4">
                <h2 className={'text-neutral-0 font-bold'}>Resources</h2>
                <nav>
                  <ul className={'space-y-3 text-sm font-medium'}>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0 flex gap-1'}>
                        <span>About</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.5625 3.125C11.5625 2.77982 11.8423 2.5 12.1875 2.5H16.875C17.2202 2.5 17.5 2.77982 17.5 3.125V7.8125C17.5 8.15768 17.2202 8.4375 16.875 8.4375C16.5298 8.4375 16.25 8.15768 16.25 7.8125V3.75H12.1875C11.8423 3.75 11.5625 3.47018 11.5625 3.125Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.3169 2.68306C17.561 2.92714 17.561 3.32286 17.3169 3.56694L11.6919 9.19194C11.4479 9.43602 11.0521 9.43602 10.8081 9.19194C10.564 8.94786 10.564 8.55214 10.8081 8.30806L16.4331 2.68306C16.6771 2.43898 17.0729 2.43898 17.3169 2.68306Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.86612 5.36612C3.10054 5.1317 3.41848 5 3.75 5H8.75C9.09518 5 9.375 5.27982 9.375 5.625C9.375 5.97018 9.09518 6.25 8.75 6.25L3.75 6.25L3.75 16.25H13.75V11.25C13.75 10.9048 14.0298 10.625 14.375 10.625C14.7202 10.625 15 10.9048 15 11.25V16.25C15 16.5815 14.8683 16.8995 14.6339 17.1339C14.3995 17.3683 14.0815 17.5 13.75 17.5H3.75C3.41848 17.5 3.10054 17.3683 2.86612 17.1339C2.6317 16.8995 2.5 16.5815 2.5 16.25V6.25C2.5 5.91848 2.6317 5.60054 2.86612 5.36612Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0 flex gap-1'}>
                        <span>Support</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.5625 3.125C11.5625 2.77982 11.8423 2.5 12.1875 2.5H16.875C17.2202 2.5 17.5 2.77982 17.5 3.125V7.8125C17.5 8.15768 17.2202 8.4375 16.875 8.4375C16.5298 8.4375 16.25 8.15768 16.25 7.8125V3.75H12.1875C11.8423 3.75 11.5625 3.47018 11.5625 3.125Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.3169 2.68306C17.561 2.92714 17.561 3.32286 17.3169 3.56694L11.6919 9.19194C11.4479 9.43602 11.0521 9.43602 10.8081 9.19194C10.564 8.94786 10.564 8.55214 10.8081 8.30806L16.4331 2.68306C16.6771 2.43898 17.0729 2.43898 17.3169 2.68306Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.86612 5.36612C3.10054 5.1317 3.41848 5 3.75 5H8.75C9.09518 5 9.375 5.27982 9.375 5.625C9.375 5.97018 9.09518 6.25 8.75 6.25L3.75 6.25L3.75 16.25H13.75V11.25C13.75 10.9048 14.0298 10.625 14.375 10.625C14.7202 10.625 15 10.9048 15 11.25V16.25C15 16.5815 14.8683 16.8995 14.6339 17.1339C14.3995 17.3683 14.0815 17.5 13.75 17.5H3.75C3.41848 17.5 3.10054 17.3683 2.86612 17.1339C2.6317 16.8995 2.5 16.5815 2.5 16.25V6.25C2.5 5.91848 2.6317 5.60054 2.86612 5.36612Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Blog</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end Resources */}

              <div className="space-y-4">
                <h2 className={'text-neutral-0 font-bold'}>Legal</h2>
                <nav>
                  <ul className={'space-y-3 text-sm font-medium'}>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className={'hover:text-neutral-0'}>
                        <span>Terms & Conditions</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end Legal */}
            </div>

            <div className="">
              <div className="">
                <div className="space-y-4">
                  <h2 className={'text-neutral-0 font-bold'}>Social Links</h2>
                  <nav>
                    <ul className={'flex gap-3'}>
                      <li>
                        <Link href={'/'} className={'hover:text-neutral-0'}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.25349 16.231C10.723 17.9753 14.5266 18.3151 18.8368 15.6001C18.8053 15.6474 17.9526 16.9106 15.7105 17.5579C16.1842 18.2053 16.8316 18.9474 16.8316 18.9474C18.2684 18.9474 19.6737 18.5369 20.8895 17.7474C21.8368 17.1158 22.3737 16.0263 22.2631 14.8895C22.0737 12.9474 21.6157 11.0527 20.9053 9.23692C20.0053 6.86851 17.8421 5.22639 15.3316 4.98953C15.1105 4.97373 14.9526 4.97373 14.8579 4.97373L14.6053 5.22634C17.4948 6.0474 18.9316 7.32634 18.9632 7.37373C14.5263 5.13161 9.28424 5.10006 4.81579 7.279C4.81579 7.279 6.23685 5.87373 9.37893 5.13161L9.18946 4.94214C8.85787 4.94214 8.54207 4.97373 8.21052 5.02108C5.88946 5.41581 3.94739 7.01054 3.11053 9.20528C2.3842 11.1 1.91053 13.0895 1.73685 15.1105C1.64212 16.1842 2.14739 17.2421 3.03159 17.8579C4.19999 18.6316 5.58946 19.0421 6.99473 19.0421C6.99473 19.0421 7.56313 18.3 8.13159 17.6369C5.99999 17.0053 5.13159 15.7421 5.11579 15.6947L5.51695 15.8996C5.75676 16.0221 6.00262 16.1331 6.25349 16.231ZM8.73159 14.8579C7.70526 14.8263 6.89999 13.9579 6.93159 12.9158C6.96318 11.9369 7.75265 11.1474 8.73159 11.1158C9.75791 11.1474 10.5632 12.0158 10.5316 13.0579C10.4842 14.0369 9.71052 14.8264 8.73159 14.8579ZM15.1737 14.8579C14.1473 14.8263 13.3421 13.9579 13.3737 12.9158C13.4053 11.9369 14.1947 11.1474 15.1737 11.1158C16.2 11.1474 17.0053 12.0158 16.9737 13.0579C16.9421 14.0369 16.1526 14.8264 15.1737 14.8579Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href={'/'} className={'hover:text-neutral-0'}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.8098 6.22724C21.8677 6.14647 21.7821 6.04218 21.6894 6.07811C21.0307 6.33344 20.3423 6.50571 19.64 6.5906C20.4219 6.12348 21.0253 5.4124 21.3599 4.57053C21.394 4.48477 21.3003 4.40819 21.2195 4.4528C20.4928 4.85414 19.7091 5.14313 18.8949 5.30957C18.8608 5.31654 18.8257 5.30494 18.8018 5.27969C18.1908 4.63502 17.3866 4.20578 16.5098 4.05745C15.6147 3.90601 14.6946 4.05596 13.8938 4.48379C13.0931 4.91162 12.457 5.59313 12.0853 6.42144C11.7319 7.209 11.6365 8.08691 11.8108 8.93003C11.8243 8.99545 11.7731 9.05721 11.7065 9.05307C10.1224 8.95469 8.57469 8.53336 7.15868 7.81446C5.74627 7.09739 4.49554 6.09983 3.48267 4.8833C3.43772 4.82931 3.35252 4.83629 3.31977 4.89845C3.0046 5.49651 2.83958 6.16311 2.84003 6.8406C2.83875 7.51498 3.00425 8.17922 3.32178 8.77416C3.63932 9.36911 4.09905 9.87631 4.66003 10.2506C4.0651 10.2344 3.48178 10.0873 2.95128 9.82067C2.88291 9.78631 2.8009 9.83524 2.80446 9.91167C2.84583 10.8009 3.17228 11.6936 3.73734 12.3786C4.33866 13.1074 5.17328 13.6062 6.10003 13.7906C5.74328 13.8992 5.3729 13.9564 5.00003 13.9606C4.79709 13.9582 4.59454 13.9433 4.39356 13.9158C4.31904 13.9056 4.2582 13.9764 4.28428 14.0469C4.5607 14.7944 5.04903 15.4467 5.6911 15.9228C6.37755 16.4318 7.2056 16.7142 8.06003 16.7306C6.61723 17.8659 4.83591 18.4855 3.00003 18.4906C2.81138 18.4912 2.62282 18.4851 2.43471 18.4723C2.3287 18.4651 2.27995 18.6063 2.37132 18.6605C4.16009 19.7221 6.20462 20.2831 8.29003 20.2806C9.82972 20.2966 11.3572 20.0056 12.7831 19.4247C14.2091 18.8437 15.5051 17.9845 16.5952 16.8971C17.6854 15.8097 18.548 14.516 19.1326 13.0915C19.7172 11.667 20.0121 10.1403 20 8.6006V8.12077C20 8.0892 20.015 8.05951 20.0402 8.04048C20.7184 7.52834 21.3149 6.91691 21.8098 6.22724Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href={'/'} className={'hover:text-neutral-0'}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.372 7.264C4.38425 7.14227 4.36784 7.01935 4.32408 6.9051C4.28033 6.79084 4.21043 6.68841 4.12 6.606L2.252 4.339V4H8.05L12.532 13.905L16.472 4H22V4.339L20.403 5.88C20.3353 5.93225 20.2831 6.00189 20.2519 6.0815C20.2208 6.16111 20.2118 6.24769 20.226 6.332V17.666C20.2118 17.7503 20.2208 17.8369 20.2519 17.9165C20.2831 17.9961 20.3353 18.0658 20.403 18.118L21.963 19.66V20H14.12V19.661L15.735 18.081C15.894 17.921 15.894 17.874 15.894 17.63V8.468L11.402 19.962H10.796L5.566 8.468V16.172C5.523 16.496 5.63 16.822 5.856 17.056L7.957 19.624V19.962H2V19.624L4.1 17.056C4.21111 16.9401 4.29358 16.7997 4.3408 16.6462C4.38803 16.4928 4.39871 16.3304 4.372 16.172V7.264Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="border-secondary-40 mt-4 border-t pt-4">
                <div className="space-y-4">
                  <h2 className={'text-neutral-0 font-bold'}>Join Our Newsletter</h2>
                  <FormSubscribe />
                </div>
              </div>
            </div>
          </div>

          <div className="text-secondary-30 flex items-baseline justify-between gap-4 py-4 text-xs font-medium">
            <div className="">Copyright © All rights Reserved</div>
            <div className="">
              <ul className={'flex'}>
                <li>
                  <Link href={'/'} className={'hover:text-white'}>
                    Privacy & Cookies
                  </Link>
                </li>
                <li className={'px-4'}>|</li>
                <li>
                  <Link href={'/'} className={'hover:text-white'}>
                    Ts&Cs
                  </Link>
                </li>
                <li className={'px-4'}>|</li>
                <li>
                  <Link href={'/'} className={'hover:text-white'}>
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
