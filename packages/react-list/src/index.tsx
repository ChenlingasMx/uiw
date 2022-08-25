import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { ListItem } from './Item';
import './style/index.less';

export * from './Item';

export interface ListProps<T> extends IProps, HTMLDivProps {
  bordered?: boolean;
  striped?: boolean;
  noHover?: boolean;
  active?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
  renderItem?: (item: any, idx: number) => React.ReactNode;
  dataSource?: T[];
}

function InternalList<T>(props: ListProps<T>, ref: React.ForwardedRef<HTMLDivElement>) {
  const {
    prefixCls = 'w-list',
    bordered = true,
    striped = false,
    noHover = false,
    active = false,
    size = 'default',
    renderItem,
    className,
    children,
    header,
    footer,
    dataSource = [],
    ...resetProps
  } = props;
  let items: React.ReactNode;
  if (dataSource && dataSource.length > 0) {
    items = dataSource.map((item: any, index: number) => renderItem && renderItem!(item, index));
  } else {
    items = children;
  }
  let childrenList = React.Children.map(
    items,
    (child: React.ReactNode, index) =>
      React.isValidElement(child) &&
      React.cloneElement(child, {
        key: index,
      }),
  );
  const classString = [
    prefixCls,
    className,
    striped ? `${prefixCls}-striped` : null,
    noHover ? `${prefixCls}-no-hover` : null,
    active ? `${prefixCls}-active` : null,
    bordered ? `${prefixCls}-bordered` : null,
    size && size !== 'default' ? `${prefixCls}-size-${size}` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <div className={classString} {...resetProps} ref={ref}>
      {header && <div className={`${prefixCls}-header`}>{header}</div>}
      {childrenList}
      {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
    </div>
  );
}

type ListComponent = React.FC<React.PropsWithRef<ListProps<any>>> & { Item: typeof ListItem };
const List: ListComponent = React.forwardRef<HTMLDivElement>(InternalList) as unknown as ListComponent;
List.Item = ListItem;

export default List;
