import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

export const Table: React.FC<TableProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <table
      className={`${className} ${classes.content}`}
      style={{ width: '100%', tableLayout: 'auto', borderSpacing: '0px' }}
      {...rest}
    >
      {children}
    </table>
  );
};

const useStyles = createUseStyles({
  content: {
    width: '100%',
    tableLayout: 'auto',
    borderSpacing: '0px',
  },
});
