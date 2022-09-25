import clsx from 'clsx';
import * as React from 'react';

type DetailsProps = {
  children: React.ReactNode;
  className?: string;
  label: string;
};

export const Details: React.FC<DetailsProps> = (props) => {
  const { children, label, className, ...detailsProps } = props;
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={clsx('border-neutral-10 overflow-hidden rounded-xl border', className)} {...detailsProps}>
      <div
        className="bg-neutral-10 flex cursor-pointer items-center justify-between gap-4 px-4 py-3 active:select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={'font-bold'}>{label}</h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(isOpen && 'rotate-180')}
        >
          <path
            d="M12.071 10.328L7.12101 15.278C6.93241 15.4602 6.67981 15.561 6.41761 15.5587C6.15541 15.5564 5.9046 15.4512 5.71919 15.2658C5.53379 15.0804 5.42862 14.8296 5.42634 14.5674C5.42406 14.3052 5.52485 14.0526 5.70701 13.864L11.364 8.207C11.5515 8.01953 11.8058 7.91422 12.071 7.91422C12.3362 7.91422 12.5905 8.01953 12.778 8.207L18.435 13.864C18.6172 14.0526 18.718 14.3052 18.7157 14.5674C18.7134 14.8296 18.6082 15.0804 18.4228 15.2658C18.2374 15.4512 17.9866 15.5564 17.7244 15.5587C17.4622 15.561 17.2096 15.4602 17.021 15.278L12.071 10.328Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {isOpen && <div className="px-4 py-4 pb-5">{children}</div>}
    </div>
  );
};
