import { Pagination, PaginationProps } from 'antd';

import { getPaginationClass } from './const';

export const AppPagination = ({
  className,
  showSizeChanger = false,
  ...props
}: PaginationProps) => {
  return (
    <Pagination
      // nextIcon={NextIcon}
      // prevIcon={PrevIcon}
      className={getPaginationClass(className)}
      showSizeChanger={showSizeChanger}
      {...props}
    />
  );
};
