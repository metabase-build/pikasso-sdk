import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  totalOnSave: number;
  totalAuction: number;
  onChange: (value: number) => void;
};

export const Tabs: React.FC<TabsProps> = ({ className, totalOnSave = 0, totalAuction = 0, onChange, ...rest }) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleOnClick = (data: number) => {
    setCurrentTab(data);
    onChange(data);
  };

  return (
    <div {...rest} className={className}>
      <div className={classes.container}>
        <button
          className={`${classes.button} ${classes.marginLeft} ${currentTab === 0 && classes.buttonActivate}`}
          onClick={() => handleOnClick(0)}
        >
          On Sale ({totalOnSave})
        </button>
        <button
          className={`${classes.button} ${currentTab === 1 && classes.buttonActivate}`}
          onClick={() => handleOnClick(1)}
        >
          Live Auction ({totalAuction})
        </button>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  container: { borderBottom: '1px solid #EEEFF0', textAlign: 'left', marginTop: '30px' },
  button: {
    border: 0,
    background: '#ffffff',
    color: '#7C7D89',
    fontWeight: 500,
    fontSize: '16px',
    cursor: 'pointer',
    paddingBottom: '12px',
    '&:hover': {
      color: '#5318de',
    },
    '&:active': {
      color: '#5318de',
    },
  },
  buttonActivate: {
    color: '#6E43D4',
    fontWeight: 500,
    borderBottom: '2px solid #6E43D4',
  },
  marginLeft: {
    marginRight: '20px',
  },
});
