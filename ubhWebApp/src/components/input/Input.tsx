import { TextInput, Textarea, NumberInput, Loader } from '@mantine/core';
import { IconExclamationCircleFilled } from '@tabler/icons-react';
import classes from './Input.module.css';

type InputVariant = 'single-line' | 'multi-line' | 'numeric' | 'email' | 'phone';

type InputProps = {
  variant?: InputVariant;
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  loading?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: any) => void;  // 'any' is temporary
};

export function Input({label, placeholder, variant='single-line', description, error, loading, disabled, value, onChange}: InputProps) {
  const rightIcon = error ? <IconExclamationCircleFilled size={20} color='#941f1f' />
    : loading ? <Loader size={16} />
    : null;

  if (variant === 'single-line') {
    return (
      <TextInput
        type='text'
        label={label}
        placeholder={placeholder}
        description={description}
        error={error}
        disabled={disabled}
        value={value}
        onChange={onChange}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          description: classes.description,
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
        description={description}
        error={error}
        disabled={disabled}
        value={value}
        onChange={onChange}
        rightSection={rightIcon}
        autosize
        minRows={3}
        classNames={{
          root: classes.root,
          label: classes.label,
          description: classes.description,
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
        description={description}
        error={error}
        disabled={disabled}
        value={value}
        min={0}
        onChange={onChange}
        rightSection={rightIcon}
        rightSectionWidth={35}
        classNames={{
          root: classes.root,
          label: classes.label,
          description: classes.description,
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
        type='email'
        label={label}
        placeholder={placeholder}
        description={description}
        error={error}
        disabled={disabled}
        value={value}
        onChange={onChange}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          description: classes.description,
          input: `${classes.input} ${loading ? classes.loading : ''}`,
          error: classes.error,
        }}
      />
    );
  }

  if (variant === 'phone') {
    return (
      <TextInput
        type='tel'
        label={label}
        placeholder={placeholder}
        description={description}
        error={error}
        disabled={disabled}
        value={value}
        onChange={onChange}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          description: classes.description,
          input: `${classes.input} ${loading ? classes.loading : ''}`,
          error: classes.error,
        }}
      />
    );
  }
}
