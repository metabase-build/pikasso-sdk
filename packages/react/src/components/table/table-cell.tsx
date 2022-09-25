import React, { FC, TdHTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';

export type TableCellProps = TdHTMLAttributes<HTMLTableDataCellElement>;

export const TableCell: FC<TableCellProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <td className={`${className} ${classes.content}`} {...rest}>
      {children}
    </td>
  );
};

const useStyles = createUseStyles({
  content: {
    padding: '16px 12px',
    textAlign: 'left',
    borderTop: '1px solid #eeeff0',
  },
});
