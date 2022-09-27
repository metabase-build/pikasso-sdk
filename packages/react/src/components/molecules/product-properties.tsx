import * as React from 'react';
import { Wrapper } from '@/components/wrapper/wrapper';
import { createUseStyles } from 'react-jss';
import CollapseList from '@/components/molecules/collapseList';

export type ProductPropertiesProps = React.HTMLAttributes<HTMLDivElement> & { data: any[] };

export const ProductProperties: React.FC<ProductPropertiesProps> = ({ data, className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={`${className} ${classes.container}`}>
      <Wrapper>
        <CollapseList id={'property'} title={'Properties'}>
          <div className={classes.content}>
            {data.map((item, index) => (
              <div key={index} className={classes.property}>
                <p>{item.type}</p>
                <p className={classes.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </CollapseList>
      </Wrapper>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    maxWidth: '564px',
  },

  content: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    gap: '12px',
    margin: '12px',
  },

  property: {
    background: 'rgba(145, 111, 242, 0.12)',
    border: '1px solid #6E43D4',
    borderRadius: '12px',
    color: '#5A2FBF',
    padding: '12px 30px',
    fontSize: '12px',
  },

  name: {
    color: '#1F1F23',
    fontSize: '18px',
    fontWeight: 700,
  },
});
