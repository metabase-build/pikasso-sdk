import React, { FC, HTMLAttributes } from 'react';
import { Wrapper } from '@/components/wrapper/wrapper';
import { createUseStyles } from 'react-jss';
import CollapseList from '@/components/molecules/collapseList';

export type ProductDetailsProps = HTMLAttributes<HTMLDivElement> & { data: any };

export const ProductDetails: FC<ProductDetailsProps> = ({ data, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={className}>
      <Wrapper>
        <CollapseList id={'detail'} title={'Details'} defaultExpanded={true}>
          <div className={classes.content}>
            <div className={classes.contentLeft}>
              <p>Contract Address</p>
              <p>Token ID</p>
              <p>Token Standard</p>
              <p>Blockchain</p>
              <p>Metadata</p>
              <p>Creator Fees</p>
            </div>

            <div className={classes.contentRight}>
              <p className={classes.link}>{data.contractAddress}</p>
              <p>{data.tokenId}</p>
              <p>{data.tokenStandard}</p>
              <p>{data.blockchain}</p>
              <p>{data.metadata}</p>
              <p>{data.creatorFees}%</p>
            </div>
          </div>
        </CollapseList>
      </Wrapper>
    </div>
  );
};

const useStyles = createUseStyles({
  header: {
    fontSize: '16px',
    color: '#1F1F23',
    backgroundColor: '#EEEFF0',
    height: '46px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 12px',
    alignItems: 'center',
  },

  content: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  contentLeft: { textAlign: 'left', margin: '0 12px', color: '#7C7D89' },

  contentRight: { textAlign: 'right', margin: '0 12px', color: '#1F1F23' },

  link: { color: '#4663E2' },
});
