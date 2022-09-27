import * as React from 'react';
import { ProductSaleHistory } from '@/components/molecules/product-sale-history';
import { ProductNft } from '@/components/molecules/product-nft';
import { ProductProperties } from '@/components/molecules/product-properties';
import { ProductSaleInfo } from '@/components/molecules/product-sale-info';
import { ProductDetails } from '@/components/molecules/product-details';
import { ProductNftInfo } from '@/components/molecules/product-nft-info';
import { createUseStyles } from 'react-jss';

export type PikassoWidgetProductDetailProps = React.HTMLAttributes<HTMLDivElement>;

const productDetail = {
  nftInfo: {
    image:
      'https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=1380',
    title: 'Monkey collection 69',
    name: 'Monkey 66',
    creator: 'hung@codelight.co',
    owner: 'John Doe',
    description: 'You can find any kind of monkey NFT you are looking for.',
  },
  saleInfo: {
    startTime: 'July 1, 2022',
    endTime: 'July 31, 2022',
    price: '2,500',
  },
  details: {
    contractAddress: '0x2953...4963',
    tokenId: '7582415049409507...',
    tokenStandard: 'ERC-1155',
    blockchain: 'Polygon',
    metadata: 'Centralized',
    creatorFees: '0',
  },
  properties: [
    { type: 'Character', name: 'HUMAN 1' },
    { type: 'Character', name: 'HUMAN 2' },
  ],
  history: [
    { event: 'Bought', price: '36.39', from: 'Estel Gutmann', to: 'EdibleAnimal', datetime: '7/13/2022' },
    { event: 'Bought', price: '36.39', from: 'EdibleAnimal', to: 'James Main', datetime: '7/13/2022' },
  ],
};

export const PikassoWidgetProductDetail: React.FC<PikassoWidgetProductDetailProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  const data = productDetail;

  return (
    <div {...rest} className={`${classes.container} ${className}`}>
      <div className={classes.boxNft}>
        <ProductNft data={data.nftInfo.image} />

        <div className={classes.flex}>
          <ProductNftInfo data={data.nftInfo} />

          <ProductSaleInfo data={data.saleInfo} className={classes.marginTop} />

          <ProductDetails data={data.details} className={classes.marginTop} />
        </div>
      </div>

      <ProductProperties data={data.properties} className={classes.marginTop} />

      <ProductSaleHistory data={data.history} className={classes.marginTop} />
    </div>
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
