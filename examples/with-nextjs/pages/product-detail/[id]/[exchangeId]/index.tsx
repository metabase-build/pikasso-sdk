import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticPaths } from 'next';
import * as React from 'react';
import { PikassoWidgetProductDetail } from '@pikasso-sdk/react';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id, exchangeId } = params as { id: string; exchangeId: string };

  return {
    props: { id, exchangeId },
    revalidate: 1,
  };
};

const Index: NextPage = ({ id, exchangeId }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>
      <PikassoWidgetProductDetail nftId={id} exchangeId={exchangeId} environment={'dev'} />
    </React.Fragment>
  );
};

export default Index;
