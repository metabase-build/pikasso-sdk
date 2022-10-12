import * as React from 'react';
import { Wrapper } from '@/components/wrapper/wrapper';
import { createUseStyles } from 'react-jss';
import { PikassoPayButton } from '@/components/pikasso-pay-button';

export type ProductSaleInfoProps = React.HTMLAttributes<HTMLDivElement> & {
  nftId: string;
  environment?: string;
  data: any;
};

export const ProductSaleInfo: React.FC<ProductSaleInfoProps> = ({ nftId, environment, data, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={className}>
      <Wrapper>
        <div className={classes.content}>
          <div className={classes.contentLeft}>
            <p className={classes.marginBottom}>Current Price</p>

            <div>
              <span className={classes.money}>${data.order.price}</span>
              <span>({data.order.price} ETH)</span>
            </div>
          </div>

          <div className={classes.contentRight}>
            <PikassoPayButton nftId={nftId} theme={'primary'} environment={environment} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const useStyles = createUseStyles({
  header: {
    fontSize: '16px',
    color: '#FFFFFF',
    background: 'linear-gradient(61.1deg, #F6F6F6 -18.33%, #916FF2 20.35%, #4A20B0 60.96%, #2F107C 105.78%)',
    height: '46px',
    display: 'flex',
    justifyContent: 'left',
    padding: '0 12px',
    alignItems: 'center',
  },

  content: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#FAFEE7',
    border: '1px solid #D0F066',
  },

  contentLeft: { textAlign: 'left', margin: '12px', color: '#7C7D89' },

  contentRight: { alignItems: 'center', display: 'flex', margin: '8px' },

  marginLeft: {
    marginLeft: '10px',
  },

  marginBottom: {
    marginBottom: '12px',
  },

  money: {
    color: '#2E2D2D',
    fontSize: '30px',
    lineHeight: '35.19px',
    marginRight: '8px',
  },

  button: {
    width: '179px',
    height: '48px',
    color: '#1F1F23',
    fontSize: '18px',
    border: '1px solid #E4E3FC',
    background: '#C1E64C',
    borderRadius: '50px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#d1ef74',
    },
    '&:active': {
      backgroundColor: '#9bb741',
    },
  },
});
