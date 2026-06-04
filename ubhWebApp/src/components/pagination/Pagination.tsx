import { Pagination } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import classes from './Pagination.module.css';

type PaginationProps = {
  total: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
};

export function NumberedPagination({
  total,
  value,
  onChange,
  disabled,
}: PaginationProps) {
  const handleChange = (newValue: number) => {
    onChange?.(newValue);
    if (typeof document !== 'undefined') {
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  return (
    <Pagination
      total={total}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      hideWithOnePage
      classNames={{
        root: classes.root,
        control: classes.pagination,
      }}
    />
  );
}
