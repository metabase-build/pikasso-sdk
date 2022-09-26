import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Fragment } from 'react';
import Image from 'next/future/image';
import { Details } from '../../../components/details';
import { Avatar } from '../../../components/avatar';
import { CardNft } from '../../../components/card-nft';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import Head from 'next/head';
import { PikassoPayButton } from '@pikasso-sdk/react';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { nftId } = params as { nftId: string };

  return {
    props: { nftId },
    revalidate: 1,
  };
};

const Home: NextPage = ({ nftId }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Fragment>
      <Head>
        <title>Pawradise #13529</title>
      </Head>

      <Header />

      <main className={'mt-7.5 space-y-15'}>
        <div className="container">
          <div className="flex gap-6">
            <div className="1/2 lg:w-1/3 lg:min-w-max">
              <div className="flex">
                <Image
                  src={'/assets/images/pawradise-0.png'}
                  width={972 / 2}
                  height={972 / 2}
                  alt={'Pawradise #13529'}
                  className={'aspect-square'}
                />
              </div>
              {/* end image primary */}

              <Details label={'Properties'} className={'mt-5'}>
                <div className="flex flex-wrap gap-3">
                  <div className="border-secondary bg-secondary/10 space-y-1 rounded-xl border px-6 py-5 text-center">
                    <div className="text-secondary text-xs">Eyes</div>
                    <div className="text-lg font-bold uppercase leading-none">eye mask</div>
                    <div className="text-xs text-neutral-50">74% have this trait</div>
                  </div>
                  <div className="border-secondary bg-secondary/10 space-y-1 rounded-xl border px-6 py-5 text-center">
                    <div className="text-secondary text-xs">Heads</div>
                    <div className="text-lg font-bold uppercase leading-none">Knitted cap</div>
                    <div className="text-xs text-neutral-50">74% have this trait</div>
                  </div>
                </div>
              </Details>
              {/* end properties */}
            </div>

            <div className="w-1/2 lg:w-2/3">
              <div className="">
                <div className="text-secondary text-sm">Pawradise</div>

                <h1 className={'mt-1 text-3xl font-bold'}>Pawradise #13529</h1>

                <div className="mt-3 flex">
                  <div className="flex items-center gap-2">
                    <div className="text-sm">Creator:</div>
                    <Avatar name={'Hashmasks'} picture={'/assets/images/user-2.png'} size={'small'} />
                  </div>
                  <div className="border-neutral-10 ml-4 border-l pl-4" />
                  <div className="flex items-center gap-2">
                    <div className="text-sm">Owner:</div>
                    <Avatar name={'Hashmasks'} picture={'/assets/images/user-2.png'} size={'small'} />
                  </div>
                </div>
                <div className="mt-4 text-sm text-neutral-50">
                  <p>
                    The Art Of Ni no Kuni 2 is the fourth sense of 4 limited digital premium editions of the original
                    painting (oil on canvas, 60x60 cm). This vibrant artwork has been painted by Meetbits. She loves
                    creating new worlds by bringing in the sensual and powerful energy of the beauty on earth.
                  </p>
                </div>
              </div>
              {/* end information */}
              <div className="bg-primary-5 border-primary-30 mt-5 rounded-xl border px-4 py-4 pb-5">
                <div className="text-sm text-neutral-50">Current Price</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className={'text-3xl font-medium'}>$2,500</span>
                  <span className={'text-sm'}>(0.845 ETH)</span>
                </div>
                <div className="mt-7.5">
                  {/* TODO: SDK Button here */}

                  <PikassoPayButton nftId={nftId} environment="production" />
                  {/*<code>Paste SDK Button here with arguments {nftId}</code>*/}
                </div>
              </div>
              {/* end listing */}
              <Details label={'Details'} className="mt-9">
                <table className={'w-full table-auto text-sm'}>
                  <tbody>
                    <tr>
                      <th className={'py-1 text-left font-normal text-neutral-50'}>Contract Address</th>
                      <td className={'text-accent-info py-1 text-right'}>0x2953...4963</td>
                    </tr>
                    <tr>
                      <th className={'py-1 text-left font-normal text-neutral-50'}>Token ID</th>
                      <td className={'py-1 text-right'}>7582415049409507...</td>
                    </tr>
                    <tr>
                      <th className={'py-1 text-left font-normal text-neutral-50'}>Token Standard</th>
                      <td className={'py-1 text-right'}>ERC-1155</td>
                    </tr>
                    <tr>
                      <th className={'py-1 text-left font-normal text-neutral-50'}>Blockchain</th>
                      <td className={'py-1 text-right'}>Polygon</td>
                    </tr>
                    <tr>
                      <th className={'py-1 text-left font-normal text-neutral-50'}>Metadata</th>
                      <td className={'py-1 text-right'}>Centralized</td>
                    </tr>
                    <tr>
                      <th className={'py-1 text-left font-normal text-neutral-50'}>Creator Fees</th>
                      <td className={'py-1 text-right'}>0%</td>
                    </tr>
                  </tbody>
                </table>
              </Details>
              {/* end details */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="space-y-4">
            <h2 className={'font-bold'}>Sale History</h2>
            <div className="border-neutral-10 overflow-hidden rounded-xl border">
              <table className={'divide-neutral-10 w-full table-auto divide-y'}>
                <thead className={'bg-neutral-10'}>
                  <tr>
                    <th className={'px-5 py-3 text-left text-sm font-bold text-neutral-50'}>Event</th>
                    <th className={'px-5 py-3 text-left text-sm font-bold text-neutral-50'}>Price</th>
                    <th className={'px-5 py-3 text-left text-sm font-bold text-neutral-50'}>From</th>
                    <th className={'px-5 py-3 text-left text-sm font-bold text-neutral-50'}>To</th>
                    <th className={'px-5 py-3 text-left text-sm font-bold text-neutral-50'}>Time</th>
                  </tr>
                </thead>
                <tbody className={'divide-neutral-10 divide-y'}>
                  <tr className={'hover:bg-secondary-10/50 transition'}>
                    <td className={'px-5 py-6'}>Bought</td>
                    <td className={'px-5 py-6'}>$36.39</td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'Estel Gutmann'} picture={'/assets/images/user-1.png'} />
                    </td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'Edible Animal'} picture={'/assets/images/user-6.png'} />
                    </td>
                    <td className={'px-5 py-6'}>7/13/2022</td>
                  </tr>
                  <tr className={'hover:bg-secondary-10/50 transition'}>
                    <td className={'px-5 py-6'}>Bought</td>
                    <td className={'px-5 py-6'}>$36.39</td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'Estel Gutmann'} picture={'/assets/images/user-1.png'} />
                    </td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'James Main'} picture={'/assets/images/user-5.png'} />
                    </td>
                    <td className={'px-5 py-6'}>7/13/2022</td>
                  </tr>
                  <tr className={'hover:bg-secondary-10/50 transition'}>
                    <td className={'px-5 py-6'}>Bought</td>
                    <td className={'px-5 py-6'}>$36.39</td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'Estel Gutmann'} picture={'/assets/images/user-1.png'} />
                    </td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'Dentsu'} picture={'/assets/images/user-4.png'} />
                    </td>
                    <td className={'px-5 py-6'}>7/13/2022</td>
                  </tr>
                  <tr className={'hover:bg-secondary-10/50 transition'}>
                    <td className={'px-5 py-6'}>Bought</td>
                    <td className={'px-5 py-6'}>$36.39</td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'Estel Gutmann'} picture={'/assets/images/user-1.png'} />
                    </td>
                    <td className={'px-5 py-6'}>
                      <Avatar name={'Ma3shaan'} picture={'/assets/images/user-3.png'} />
                    </td>
                    <td className={'px-5 py-6'}>7/13/2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="space-y-4">
            <h2 className={'font-bold'}>More from this collection</h2>

            <div className="grid grid-cols-4 gap-6">
              {/* initial an array with 4 items */}
              {[
                {
                  description: 'Monkey collection 69',
                  title: 'Pawradise #13530',
                  image: '/assets/images/pawradise-1.png',
                  avatar: '/assets/images/user-2.png',
                  username: 'Hashmasks',
                  price: '$2,500',
                },
                {
                  description: 'Monkey collection 69',
                  title: 'Pawradise #13531',
                  image: '/assets/images/pawradise-2.png',
                  avatar: '/assets/images/user-2.png',
                  username: 'Hashmasks',
                  price: '$2,500',
                },
                {
                  description: 'Monkey collection 69',
                  title: 'Pawradise #13532',
                  image: '/assets/images/pawradise-3.png',
                  avatar: '/assets/images/user-2.png',
                  username: 'Hashmasks',
                  price: '$2,500',
                },
                {
                  description: 'Monkey collection 69',
                  title: 'Pawradise #13533',
                  image: '/assets/images/pawradise-4.png',
                  avatar: '/assets/images/user-2.png',
                  username: 'Hashmasks',
                  price: '$2,500',
                },
              ].map((nft, index) => (
                <CardNft
                  key={index}
                  description={nft.description}
                  title={nft.title}
                  image={nft.image}
                  avatar={nft.avatar}
                  username={nft.username}
                  price={nft.price}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
