import * as React from 'react';
import { Table } from '@/components/table/table';
import { TableHeader } from '@/components/table/table-header';
import { TableHeaderCell } from '@/components/table/table-header-cell';
import { TableBody } from '@/components/table/table-body';
import { TableRow } from '@/components/table/table-row';
import { TableCell } from '@/components/table/table-cell';
import { Wrapper } from '@/components/wrapper/wrapper';
import { createUseStyles } from 'react-jss';

export type ProductSaleHistoryProps = React.HTMLAttributes<HTMLDivElement> & { data: any[] };

export const ProductSaleHistory: React.FC<ProductSaleHistoryProps> = ({ data, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={className}>
      <Wrapper>
        <Table>
          <TableHeader>
            <TableHeaderCell>Event</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>From</TableHeaderCell>
            <TableHeaderCell>To</TableHeaderCell>
            <TableHeaderCell>Time</TableHeaderCell>
          </TableHeader>

          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.event}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <div className={classes.boxUser}>
                    <span className={classes.spanIcon}>JD</span>
                    <span>{item.from}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={classes.boxUser}>
                    <span className={classes.spanIcon}>JD</span>
                    <span>{item.to}</span>
                  </div>
                </TableCell>
                <TableCell>{item.datetime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    </div>
  );
};

const useStyles = createUseStyles({
  boxUser: { display: 'flex', alignItems: 'center' },

  spanIcon: {
    background: '#6E43D4',
    color: '#ffffff',
    padding: '4px',
    borderRadius: '24px',
    height: '24px',
    width: '24px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
  },
});
