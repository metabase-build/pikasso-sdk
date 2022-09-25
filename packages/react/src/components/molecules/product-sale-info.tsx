import React, { FC, HTMLAttributes } from 'react';
import { Wrapper } from '@/components/wrapper/wrapper';
import { createUseStyles } from 'react-jss';

export type ProductSaleInfoProps = HTMLAttributes<HTMLDivElement> & { data: any };

export const ProductSaleInfo: FC<ProductSaleInfoProps> = ({ data, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={className}>
      <Wrapper>
        <div className={classes.header}>
          <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.529 4.106a.716.716 0 1 0-1.433 0v4.776c0 .247.128.477.337.608l2.865 1.791a.716.716 0 1 0 .76-1.215l-2.53-1.58v-4.38Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.813.523a8.357 8.357 0 0 0-8.356 8.36 8.358 8.358 0 0 0 8.356 8.358 8.358 8.358 0 0 0 8.356-8.359A8.357 8.357 0 0 0 8.813.523Zm-6.924 8.36a6.925 6.925 0 1 1 13.847 0 6.925 6.925 0 1 1-13.847 0Z"
              fill="currentColor"
            />
          </svg>

          <span className={classes.marginLeft}>Ends on {data.endTime}</span>
        </div>

        <div className={classes.content}>
          <div className={classes.contentLeft}>
            <p>Current Price</p>

            <div>
              <span className={classes.money}>${data.price}</span>
              <span>({data.price} ETH)</span>
            </div>
          </div>

          <div className={classes.contentRight}>
            <button className={classes.button}>Stop Auction</button>
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
    background: 'background: rgba(145, 111, 242, 0.12)',
  },

  contentLeft: { textAlign: 'left', margin: '12px', color: '#7C7D89' },

  contentRight: { alignItems: 'center', display: 'flex', margin: '8px' },

  marginLeft: {
    marginLeft: '10px',
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
