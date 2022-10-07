import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { ProductNft } from '@/components/molecules/product-nft';
import { ProductProperties } from '@/components/molecules/product-properties';
import { ProductNftInfo } from '@/components/molecules/product-nft-info';
import { createUseStyles } from 'react-jss';
import useEnvironment from '@/hooks/use-environment';
import { getEnvironmentOpenApiUrls } from '@pikasso-sdk/core';
import { ProductSaleInfo } from '@/components/molecules/product-sale-info';

export type PikassoWidgetProductDetailProps = React.HTMLAttributes<HTMLDivElement> & { nftId: string };

export const PikassoWidgetProductDetail: React.FC<PikassoWidgetProductDetailProps> = ({
  nftId,
  className,
  ...rest
}) => {
  const { isServerSideRendering } = useEnvironment();
  const classes = useStyles();
  const [nft, setNft] = useState<any>();
  const [message, setMessage] = useState('');

  const getNFT = useCallback(async () => {
    if (!isServerSideRendering && nftId) {
      const openApiBaseUrl = getEnvironmentOpenApiUrls('');

      const responseNft = await fetch(`${openApiBaseUrl}/market/nft/${nftId}`);
      let nftData = await responseNft.json();

      if (nftData.statusCode === 200) {
        setNft(nftData.data);
      } else {
        setMessage('Not found NFT');
      }
    }
  }, [nftId, isServerSideRendering]);

  useEffect(() => {
    getNFT().catch((e) => console.log(e));
  }, [getNFT]);

  if (!(nft && !isServerSideRendering)) {
    return <div style={{ textAlign: 'center' }}>{message}</div>;
  }

  return (
    <React.Fragment>
      {!isServerSideRendering && nftId && (
        <div {...rest} className={`${classes.container} ${className}`}>
          <div className={classes.boxNft}>
            <ProductNft data={nft.image} />

            <div className={classes.flex}>
              <ProductNftInfo data={nft} />

              <ProductSaleInfo nftId={nftId} data={nft} className={classes.marginTop} />

              {/*<ProductDetails data={data.details} className={classes.marginTop} />*/}
            </div>
          </div>

          <ProductProperties data={nft.attributes} className={classes.marginTop} />

          {/*<ProductSaleHistory data={data.history} className={classes.marginTop} />*/}
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

  boxNft: { display: 'flex', justifyContent: 'left', flexWrap: 'wrap', width: '100%', gap: '12px' },

  boxHistory: {
    overflow: 'auto',
    background: 'white',
    borderRadius: '10px',
    marginTop: '20px',
  },

  flex: {
    flex: 'auto',
  },

  marginTop: {
    marginTop: '20px',
  },
});
