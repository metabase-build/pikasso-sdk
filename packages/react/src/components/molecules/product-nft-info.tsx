import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type ProductNftInfoProps = React.HTMLAttributes<HTMLDivElement> & { data: any };

export const ProductNftInfo: React.FC<ProductNftInfoProps> = ({ data, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={className}>
      <div className={classes.container}>
        <div className={classes.title}>
          <span>{data.title}</span>
        </div>

        <div className={classes.name}>{data.name}</div>

        <div className={classes.boxUser}>
          <div className={`${classes.user} ${classes.marginRight}`}>
            <span>Creator:</span>

            <div className={classes.alignUser}>
              <span className={classes.spanImage}>JD</span>
              <span className={classes.marginLeft}>{data.creator}</span>
            </div>
          </div>

          <div className={classes.user}>
            <span>Owner:</span>

            <div className={classes.alignUser}>
              <span className={classes.spanImage}>JD</span>
              <span className={classes.marginLeft}>{data.owner}</span>
            </div>
          </div>
        </div>

        <p className={classes.description}>{data.description}</p>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    width: '100%',
    fontSize: '14px',
    color: '#7C7D89',
  },

  title: {
    textAlign: 'left',
    color: '#6E43D4',
    fontSize: '14px',
  },

  name: {
    marginTop: '12px',
    textAlign: 'left',
    color: '#1F1F23',
    fontSize: '30px',
    fontWeight: 700,
  },

  boxUser: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  user: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '12px',
  },

  alignUser: {
    marginLeft: '8px',
    display: 'flex',
    alignItems: 'center',
  },

  marginRight: {
    marginRight: '24px',
  },

  marginLeft: {
    marginLeft: '8px',
  },

  description: {
    textAlign: 'left',
    marginTop: '12px',
  },

  spanImage: {
    background: '#6E43D4',
    color: '#ffffff',
    padding: '4px',
    borderRadius: '22px',
    height: '22px',
    width: '22px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
