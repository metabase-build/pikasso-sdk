import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type CollectionBannerProps = React.HTMLAttributes<HTMLDivElement> & { data: any; totalItems: number };

export const CollectionBanner: React.FC<CollectionBannerProps> = ({ data, totalItems, className, ...rest }) => {
  const classes = useStyles();
  return (
    <div {...rest} className={className}>
      <div>
        <img alt={'banner'} className={classes.banner} src={data.banner} />
      </div>

      <div className={classes.containerContent}>
        <img alt={'avatar'} className={classes.avatar} src={data.avatar} />

        <div className={classes.boxEmpty} />

        <div className={classes.boxContent}>
          <div className={classes.boxTitle}>
            <span className={classes.spanName}>{data.name}</span>

            <span className={classes.spanItems}>
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          </div>

          <div className={classes.description}>{data.description} </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  banner: {
    width: '100%',
    height: '260px',
    objectPosition: 'center',
    objectFit: 'cover',
  },

  avatar: {
    position: 'absolute',
    left: '24px',
    top: '-110px',
    height: '160px',
    width: '160px',
    borderRadius: '160px',
    border: '2px solid white',
    objectPosition: 'center',
    objectFit: 'cover',
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
