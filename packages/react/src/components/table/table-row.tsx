import * as React from 'react';

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export const TableRow: React.FC<TableRowProps> = ({ className, children, ...rest }) => {
  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  );
};
