import { Loader, Select } from '@mantine/core';
import { IconChevronDownFilled } from '@tabler/icons-react';
import classes from './DropdownList.module.css';

type DropdownProps = {
  label?: string;
  placeholder?: string;
  data?: string[];
  loading?: boolean;
  value?: string | null;
  onChange?: (value: string | null) => void;
  searchable?: boolean;
};

export function DropdownList({
  label,
  placeholder,
  data,
  loading,
  value,
  onChange,
  searchable,
}: DropdownProps) {
  const rightIcon = loading ? (
    <Loader size={16} color="var(--mantine-color-ubhRed-9)" />
  ) : (
    <IconChevronDownFilled size={24} color="var(--mantine-color-neutral-9)" />
  );

  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={onChange}
      searchable={searchable}
      withCheckIcon={false}
      rightSection={rightIcon}
      comboboxProps={{
        withinPortal: false,
        offset: 0,
        dropdownPadding: 0,
      }}
      classNames={{
        root: classes.root,
        label: classes.label,
        input: `${classes.dropdownList} ${loading ? classes.loading : ''} ${value ? classes.selected : ''}`,
        error: classes.error,
        dropdown: classes.dropdown,
        option: classes.option,
      }}
    />
  );
}
