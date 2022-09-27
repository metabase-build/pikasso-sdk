import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type TableCellProps = React.TdHTMLAttributes<HTMLTableDataCellElement>;

export const TableCell: React.FC<TableCellProps> = ({ className, children, ...rest }) => {
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
