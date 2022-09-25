import React, { FC, HTMLAttributes, useState } from 'react';
import { createUseStyles } from 'react-jss';

export type CollapseListProps = HTMLAttributes<HTMLDivElement> & {
  id?: string;
  title?: string;
  defaultExpanded?: boolean;
};

export const CollapseList: FC<CollapseListProps> = ({
  id = '0',
  title = '',
  defaultExpanded = false,
  className,
  children,
  ...rest
}) => {
  const classes = useStyles();

  const [isCollapsed, setIsCollapsed] = useState(!defaultExpanded);

  const handleClick = () => {
    const bodyContElem = document.getElementById(id + '-collapsible__body__hidden');
    if (bodyContElem) {
      if (isCollapsed) {
        bodyContElem.style.maxHeight = bodyContElem.scrollHeight + 'px';
        bodyContElem.style.opacity = '1';
        setIsCollapsed(false);
      } else {
        bodyContElem.style.maxHeight = '0';
        bodyContElem.style.opacity = '0';
        setIsCollapsed(true);
      }
    }
  };

  return (
    <div id="collapsible__container" className={className} {...rest}>
      <div className={classes.header}>
        <span>{title}</span>
        <button id="button-icon" className={classes.borderNone} onClick={handleClick}>
          <svg width="14" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.329 3.171 2.6 7.9a.955.955 0 0 1-1.35-1.351l5.402-5.404a.955.955 0 0 1 1.35 0l5.403 5.404a.956.956 0 0 1-1.35 1.35L7.329 3.172Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="collapsible__title-button__container"></div>

      <div id={id + '-collapsible__body__hidden'} className={`${!defaultExpanded && classes.hide} ${classes.content}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapseList;

const useStyles = createUseStyles({
  borderNone: {
    border: 0,
    cursor: 'pointer',
  },

  header: {
    fontSize: '16px',
    color: '#1F1F23',
    backgroundColor: '#EEEFF0',
    height: '46px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 12px',
    alignItems: 'center',
  },

  content: {
    transition: 'opacity 0.4s ease, max-height 0.4s ease',
    overflow: 'hidden',
  },

  hide: { maxHeight: '0px', opacity: '0' },
});
