import { useState } from 'react';
import { TextInput, Loader } from '@mantine/core';
import { CircleAlertFilled } from '../icons/CircleAlertFilled';
import { CircleXFilled } from '../icons/CircleXFilled';
import { Search } from 'lucide-react';
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
      return 'var(--mantine-color-ubhNeutral-9)';
    }
    if (focused) {
      return 'var(--mantine-color-ubhNeutral-8)';
    }
    return 'var(--mantine-color-ubhNeutral-7)';
  };

  const leftIcon = <Search size={16} color={getSearchIconColor()} />;

  const rightIcon = error ? (
    <CircleAlertFilled width={20} height={20} />
  ) : loading ? (
    <Loader size={16} />
  ) : value ? (
    <button className={classes.clearButton} onClick={handleClear}>
      <CircleXFilled width={20} height={20} />
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
