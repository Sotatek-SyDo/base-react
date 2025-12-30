import { Pagination, PaginationProps } from 'antd';
import clsx from 'clsx';

import { getPaginationClass } from './const';

interface AppPaginationProps extends PaginationProps {
  scrollAfterChange?: boolean | (() => void);
}

export const AppPagination = ({
  className,
  showSizeChanger = false,
  pageSize = 10,
  scrollAfterChange,
  onChange,
  ...props
}: AppPaginationProps) => {
  return (
    <Pagination
      // nextIcon={NextIcon}
      // prevIcon={PrevIcon}
      className={clsx(getPaginationClass(className), {
        'max-[392px]:[&>li]:!mr-[5px]': true,
      })}
      onChange={(page, pageSize) => {
        if (scrollAfterChange) {
          typeof scrollAfterChange === 'boolean'
            ? window.scroll({
                left: 0,
                top: 0,
                behavior: 'smooth',
              })
            : scrollAfterChange?.();
        }

        onChange?.(page, pageSize);
      }}
      showSizeChanger={showSizeChanger}
      hideOnSinglePage
      pageSize={pageSize}
      {...props}
    />
  );
};
