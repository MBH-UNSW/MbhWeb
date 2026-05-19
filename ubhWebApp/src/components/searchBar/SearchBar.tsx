import { useState } from 'react';
import { TextInput, Loader } from '@mantine/core';
import { IconSearch, IconExclamationCircleFilled, IconCircleXFilled } from '@tabler/icons-react';
import classes from './SearchBar.module.css';

type SearchProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  loading?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

export function SearchBar({
  label,
  placeholder,
  error,
  loading,
  value,
  onChange,
  onClear,
}: SearchProps) {
  const [focused, setFocused] = useState(false);
  const handleClear = () => {
    onClear?.();
  };

  const getSearchIconColor = () => {
    if (error || value) {
      return 'var(--mantine-color-neutral-9)';
    }
    if (focused) {
      return 'var(--mantine-color-neutral-8)';
    }
    return 'var(--mantine-color-neutral-7)';
  };

  const leftIcon = <IconSearch size={18} color={getSearchIconColor()} />;

  const rightIcon = error ? (
    <IconExclamationCircleFilled size={20} color="var(--mantine-color-ubhRed-9)" />
  ) : loading ? (
    <Loader size={16} />
  ) : value ? (
    <button className={classes.clearButton} onClick={handleClear}>
      <IconCircleXFilled size={20} />
    </button>
  ) : null;

  return (
    <TextInput
      type="text"
      label={label}
      placeholder={placeholder}
      error={error}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      leftSection={leftIcon}
      rightSection={rightIcon}
      classNames={{
        root: classes.root,
        label: classes.label,
        input: `${classes.search} ${loading ? classes.loading : ''}`,
        error: classes.error,
      }}
    />
  );
}
