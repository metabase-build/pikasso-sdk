import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ className, children, ...rest }) => {
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
