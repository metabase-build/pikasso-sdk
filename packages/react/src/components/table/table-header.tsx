import * as React from 'react';
import { TableRow } from '@/components/table/table-row';
import { createUseStyles } from 'react-jss';

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableHeader: React.FC<TableHeaderProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <thead className={`${className} ${classes.content}`} {...rest}>
      <TableRow>{children}</TableRow>
    </thead>
  );
};

const useStyles = createUseStyles({
  content: {
    fontSize: 16,
    color: '#7C7D89',
    backgroundColor: '#EEEFF0',
  },
});
