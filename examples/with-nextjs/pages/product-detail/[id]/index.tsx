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
  const { id } = params as { id: string };

  return {
    props: { id },
    revalidate: 1,
  };
};

const Index: NextPage = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>
      <PikassoWidgetProductDetail nftId={id} environment={'staging'} />
    </React.Fragment>
  );
};

export default Index;
