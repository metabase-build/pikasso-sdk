import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticPaths } from 'next';
import * as React from 'react';
import { PikassoWidgetCampaign, PikassoWidgetProductDetail } from '@pikasso-sdk/react';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { campaignId } = params as { campaignId: string };

  return {
    props: { campaignId },
    revalidate: 1,
  };
};

const Index: NextPage = ({ campaignId }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>
      <PikassoWidgetCampaign
        campaignId={campaignId}
        refId=""
        onItemClick={(nftId: string) => {
          console.log({ nftId });
        }}
        environment="dev"
      />
    </React.Fragment>
  );
};

export default Index;
