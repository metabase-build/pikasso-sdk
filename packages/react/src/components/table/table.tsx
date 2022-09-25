import React, { FC, TableHTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';

export type TableProps = TableHTMLAttributes<HTMLTableElement>;

export const Table: FC<TableProps> = ({ className, children, ...rest }) => {
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
