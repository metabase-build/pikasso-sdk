import * as React from 'react';
import { createUseStyles } from 'react-jss';

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableBody: React.FC<TableBodyProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <tbody className={`${className} ${classes.content}`} {...rest}>
      {children}
    </tbody>
  );
};

const useStyles = createUseStyles({
  content: {
    fontSize: '16px',
    borderColor: '#EEEFF0',
    color: '#1F1F23',
  },
});
