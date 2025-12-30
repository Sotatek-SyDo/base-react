import { TablePaginationConfig } from 'antd';
import clsx from 'clsx';

import styles from './AppTable.module.scss';

export const getPaginationClass = (className?: string) =>
  clsx(
    className,
    styles.appPagination,
    '[&>li.ant-pagination-item>a]:text-sm [&>li.ant-pagination-item.ant-pagination-item-active>a]:font-bold',
    '[&>li.ant-pagination-jump-next_div.ant-pagination-item-container_span.ant-pagination-item-ellipsis]:text-main',
    '[&>li.ant-pagination-jump-prev_div.ant-pagination-item-container_span.ant-pagination-item-ellipsis]:text-main'
  );

export const getDefaultPaginationOptions: (className?: string) => TablePaginationConfig = (
  className?: string
) => {
  return {
    className: getPaginationClass(className),
    // nextIcon: NextIcon,
    // prevIcon: PrevIcon,
    hideOnSinglePage: true,
    showSizeChanger: false,
  };
};
