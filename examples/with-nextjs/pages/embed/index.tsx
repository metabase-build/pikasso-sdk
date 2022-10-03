import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {
      data: {},
    },
  };
};

const Index: NextPage = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={'w-full overflow-x-hidden bg-transparent'}>
      <iframe
        width="100%"
        height="710"
        className={'rounded-xl border'}
        src="http://localhost:3000/embed/list-collection"
        id="embed-product-detail-12994"
      ></iframe>

      <iframe
        width="100%"
        height="710"
        className={'mt-10 rounded-xl border'}
        src="http://localhost:3000/embed/product-detail"
        id="embed-product-detail-12994"
      ></iframe>
    </div>
  );
};

export default Index;
