import { Campaign } from '@/services/types';
import { getAvatarLetter } from '@/utils/string';
import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type CampaignBannerProps = React.HTMLAttributes<HTMLDivElement> & { campaign: Campaign };

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ campaign, className, ...rest }) => {
  const classes = useStyles();
  return (
    <div {...rest} className={className}>
      <div className={classes.banner}></div>

      <div className={classes.containerContent}>
        <div className={classes.avatar}>{getAvatarLetter(campaign.name)}</div>

        <div className={classes.boxEmpty} />

        <div className={classes.boxContent}>
          <div className={classes.boxTitle}>
            <span className={classes.spanName}>{campaign.name}</span>

            <span className={classes.spanItems}>
              {campaign.numberOfItems} {campaign.numberOfItems === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  banner: {
    width: '100%',
    height: '260px',
    backgroundColor: '#cbcbd5',
  },

  avatar: {
    position: 'absolute',
    left: '24px',
    top: '-110px',
    height: '160px',
    width: '160px',
    borderRadius: '160px',
    border: '2px solid white',
    backgroundColor: '#c1e64c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
  },

  containerContent: {
    display: 'flex',
    marginTop: '20px',
    position: 'relative',
  },

  '@media screen and (max-width: 992px)': {
    containerContent: {
      flexWrap: 'wrap',
      margin: '0 12px',
    },

    avatar: {
      position: 'absolute',
      left: '24px',
      top: '-70px',
      height: '120px',
      width: '120px',
    },
  },

  boxContent: { minHeight: '80px', flex: 'auto' },

  boxEmpty: { height: '70px', minWidth: '200px' },

  boxTitle: {
    textAlign: 'left',
    alignItems: 'center',
    display: 'flex',
  },

  description: {
    color: '#7C7D89',
    textAlign: 'left',
    marginTop: '12px',
    fontSize: '14px',
    width: '100%',
  },

  spanItems: {
    color: '#1F1F23',
    background: '#EEEFF0',
    padding: '5px 8px',
    borderRadius: '10px',
    fontSize: '12px',
  },

  spanName: { color: '#1F1F23', fontSize: '30px', fontWeight: 700, marginRight: '12px' },
});
