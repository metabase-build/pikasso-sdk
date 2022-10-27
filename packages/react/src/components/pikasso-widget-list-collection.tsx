import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { CollectionBanner } from '@/components/molecules/collection-banner';
import { CollectionItemNft } from '@/components/molecules/collection-item-nft';
import { Tabs } from '@/components/molecules/tabs';
import { createUseStyles } from 'react-jss';
import useEnvironment from '@/hooks/use-environment';
import { getEnvironmentOpenApiUrls } from '@pikasso-sdk/core';

export type PikassoWidgetListCollectionProps = React.HTMLAttributes<HTMLDivElement> & {
  collectionId: string;
  exchangeId: string;
  environment?: string;
  onClick?: (id?: string) => void;
};

export const PikassoWidgetListCollection: React.FC<PikassoWidgetListCollectionProps> = ({
  collectionId,
  exchangeId,
  environment,
  onClick,
  className,
  ...rest
}) => {
  const { isServerSideRendering } = useEnvironment();
  const classes = useStyles();

  const [collection, setCollection] = useState<any>(null);
  const [nfts, setNfts] = useState<any[]>([]);
  const [message, setMessage] = useState('');

  const getCollection = useCallback(async () => {
    if (!isServerSideRendering && collectionId) {
      const openApiBaseUrl = getEnvironmentOpenApiUrls(environment);

      const responseCollection = await fetch(`${openApiBaseUrl}/market/collection/${collectionId}`);
      let collectionData = await responseCollection.json();
      const responseNfts = await fetch(
        `${openApiBaseUrl}/market/collection/${collectionId}/nft?exchangeId=${exchangeId}`
      );
      let nftsData = await responseNfts.json();

      if (collectionData.statusCode === 200) {
        setCollection(collectionData.data);
        setNfts(nftsData.data.nfts);
      } else {
        setMessage('Not found collection');
      }
    }
  }, [collectionId, isServerSideRendering]);

  useEffect(() => {
    getCollection().catch((e) => console.log(e));
  }, [getCollection]);

  const handleOnChangeTab = (tab: number) => {
    if (tab === 0) {
      getCollection().catch((e) => console.log(e));
    } else {
      setNfts([]);
    }
  };

  if (!(collection && !isServerSideRendering)) {
    return <div style={{ textAlign: 'center' }}>{message}</div>;
  }

  return (
    <React.Fragment>
      {!isServerSideRendering && collectionId && (
        <div {...rest} className={`${classes.container} ${className}`}>
          <CollectionBanner data={collection} totalItems={nfts.length} />

          <Tabs totalOnSave={nfts.length} totalAuction={0} onChange={handleOnChangeTab} />

          <div className={classes.listNft}>
            {nfts.map((item, index) => (
              <button key={index} onClick={() => (onClick ? onClick(item.id) : {})}>
                <CollectionItemNft data={item} collectionName={collection.name} />
              </button>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const useStyles = createUseStyles({
  container: {
    width: '100%',
    background: '#ffffff',
  },
  listNft: { marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px' },
});
