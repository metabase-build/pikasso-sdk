import React, { FC, ThHTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';

export type TableHeaderCellProps = ThHTMLAttributes<HTMLTableHeaderCellElement>;

export const TableHeaderCell: FC<TableHeaderCellProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <th className={`${className} ${classes.content}`} {...rest}>
      {children}
    </th>
  );
};

const useStyles = createUseStyles({
  content: {
    padding: '12px',
    textAlign: 'left',
  },
});
