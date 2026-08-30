import { TextInput, Textarea, NumberInput, Loader } from '@mantine/core';
import { CircleAlertFilled } from '../icons/CircleAlertFilled';
import classes from './Input.module.css';

type InputVariant = 'single-line' | 'multi-line' | 'numeric' | 'email' | 'phone';

type InputProps = {
  variant?: InputVariant;
  label?: string;
  placeholder?: string;
  error?: string;
  loading?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: (value: string | number) => void;
};

export function Input({
  label,
  placeholder,
  variant = 'single-line',
  error,
  loading,
  disabled,
  value,
  onChange,
}: InputProps) {
  const rightIcon = error ? (
    <CircleAlertFilled width={20} height={20} />
  ) : loading ? (
    <Loader size={16} />
  ) : null;

  if (variant === 'single-line') {
    return (
      <TextInput
        type="text"
        label={label}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${loading ? classes.loading : ''}`,
          error: classes.error,
        }}
      />
    );
  }

  if (variant === 'multi-line') {
    return (
      <Textarea
        label={label}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        rightSection={rightIcon}
        autosize
        minRows={3}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${loading ? classes.loading : ''}`,
          error: classes.error,
        }}
      />
    );
  }

  if (variant === 'numeric') {
    return (
      <NumberInput
        label={label}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        min={0}
        onChange={value => onChange?.(value)}
        rightSection={rightIcon}
        rightSectionWidth={35}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${loading ? classes.loading : ''}`,
          error: classes.error,
          controls: classes.controls,
          control: classes.control,
        }}
      />
    );
  }

  if (variant === 'email') {
    return (
      <TextInput
        type="email"
        label={label}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${loading ? classes.loading : ''}`,
          error: classes.error,
        }}
      />
    );
  }

  if (variant === 'phone') {
    return (
      <TextInput
        type="tel"
        label={label}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${loading ? classes.loading : ''}`,
          error: classes.error,
        }}
      />
    );
  }
}
