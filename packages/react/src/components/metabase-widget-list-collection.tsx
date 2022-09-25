import React, { FC, HTMLAttributes, useState } from 'react';
import { CollectionBanner } from '@/components/molecules/collection-banner';
import { CollectionItemNft } from '@/components/molecules/collection-item-nft';
import { Tabs } from '@/components/molecules/tabs';
import { createUseStyles } from 'react-jss';

export type MetabaseWidgetListCollectionProps = HTMLAttributes<HTMLDivElement>;

const listCollection = {
  banner: {
    banner:
      'https://vqttcoh3cizpvcdbix2geh2y3irqcpax2m5nhpsqfnsxeb6i356q.arweave.net/rCcxOPsSMvqIYUX0Yh9Y2iMBPBfTOtO-UCtlcgfI330?ext=png',
    avatar:
      'https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=1380',
    name: 'Monkey collection 69',
    description: `I really like this one. I was playing around with some Illustrator tutorials when I decided I wanted to make a pixel styled wallpaper. It started with the idea if having well known pixel game characters and the text I <3 Pixel`,
  },
  onSale: [
    {
      title: 'Monkey collection 69',
      name: 'Monkey 66',
      image:
        'https://924234.smushcdn.com/2329743/wp-content/uploads/2021/10/os-nfts-estao-mudando-tudo-mas-sao-feitos-para-durar-dica-alguns-sao.jpg?lossy=1&strip=1&webp=1',
      owner: 'Estel Gutmann',
      price: '2,500',
    },
    {
      title: 'Monkey collection 69',
      name: 'Monkey 67',
      image:
        'https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=1380',
      owner: 'Estel Gutmann',
      price: '500',
    },
  ],
  liveAuction: [
    {
      title: 'Monkey collection 69',
      name: 'Monkey 68',
      image:
        'https://924234.smushcdn.com/2329743/wp-content/uploads/2021/10/os-nfts-estao-mudando-tudo-mas-sao-feitos-para-durar-dica-alguns-sao.jpg?lossy=1&strip=1&webp=1',
      owner: 'Estel Gutmann',
      price: '200',
    },
    {
      title: 'Monkey collection 69',
      name: 'Monkey 69',
      image:
        'https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=1380',
      owner: 'Estel Gutmann',
      price: '700',
    },
    {
      title: 'Monkey collection 69',
      name: 'Monkey 70',
      image:
        'https://924234.smushcdn.com/2329743/wp-content/uploads/2021/10/os-nfts-estao-mudando-tudo-mas-sao-feitos-para-durar-dica-alguns-sao.jpg?lossy=1&strip=1&webp=1',
      owner: 'Estel Gutmann',
      price: '900',
    },
    {
      title: 'Monkey collection 69',
      name: 'Monkey 71',
      image:
        'https://924234.smushcdn.com/2329743/wp-content/uploads/2021/10/os-nfts-estao-mudando-tudo-mas-sao-feitos-para-durar-dica-alguns-sao.jpg?lossy=1&strip=1&webp=1',
      owner: 'Estel Gutmann',
      price: '100',
    },
  ],
};

export const MetabaseWidgetListCollection: FC<MetabaseWidgetListCollectionProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  const data = listCollection;

  const [items, setItems] = useState(data.onSale);

  const handleOnChangeTab = (tab: number) => {
    if (tab === 0) {
      setItems(data.onSale);
    } else {
      setItems(data.liveAuction);
    }
  };

  return (
    <div {...rest} className={`${classes.container} ${className}`}>
      <CollectionBanner data={data.banner} totalItems={data.onSale.length + data.liveAuction.length} />

      <Tabs totalOnSave={2} totalAuction={4} onChange={handleOnChangeTab} />

      <div className={classes.listNft}>
        {items.map((item, index) => (
          <CollectionItemNft key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    width: '100%',
    background: '#ffffff',
  },

  listNft: { marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px' },
});
