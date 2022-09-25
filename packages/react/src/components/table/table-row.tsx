import React, { FC, HTMLAttributes } from 'react';

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export const TableRow: FC<TableRowProps> = ({ className, children, ...rest }) => {
  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  );
};
