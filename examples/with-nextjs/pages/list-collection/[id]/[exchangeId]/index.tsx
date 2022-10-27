import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticPaths } from 'next';
import * as React from 'react';
import { useRouter } from 'next/router';
import { PikassoWidgetListCollection } from '@pikasso-sdk/react';

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
  console.log(id, exchangeId);
  const router = useRouter();
  return (
    <div>
      <PikassoWidgetListCollection
        collectionId={id}
        exchangeId={exchangeId}
        environment={'dev'}
        onClick={async (id: any) => {
          await router.push({
            pathname: `/product-detail/${id}`,
          });
        }}
      />
    </div>
  );
};

export default Index;
