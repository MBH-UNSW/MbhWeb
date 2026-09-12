import { TextInput, Textarea, NumberInput, Loader, PasswordInput } from '@mantine/core';
import { AtSign, Eye, EyeClosed, LockKeyhole } from 'lucide-react';
import { CircleAlertFilled } from '../icons/CircleAlertFilled';
import classes from './Input.module.css';
import { useState } from 'react';

type InputVariant = 'single-line' | 'multi-line' | 'numeric' | 'email' | 'phone' | 'password';

type InputProps = {
  variant?: InputVariant;
  label?: string;
  placeholder?: string;
  error?: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
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
  leftIcon,
  value,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const rightIcon = error ? ( <CircleAlertFilled width={20} height={20} />)
    : loading ? ( <Loader size={16} /> ) : null;

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
        leftSection={leftIcon}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${leftIcon ? classes.left : ''} ${loading ? classes.loading : ''}`,
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
    leftIcon = <AtSign size={16} />;
    return (
      <TextInput
        type="email"
        label={label}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        leftSection={leftIcon}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${classes.left} ${loading ? classes.loading : ''}`,
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
        leftSection={leftIcon}
        rightSection={rightIcon}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.input} ${leftIcon ? classes.left : ''} ${loading ? classes.loading : ''}`,
          error: classes.error,
        }}
      />
    );
  }

  if (variant === 'password') {
    leftIcon = <LockKeyhole size={16} />;
    const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) => {
      if (error) {
        return <CircleAlertFilled width={20} height={20} />;
      }
      return reveal ? ( <Eye width={18} height={18} /> ) : ( <EyeClosed width={18} height={18} /> );
    };
    return (
      <PasswordInput
        label={label}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        leftSection={leftIcon}
        visible={showPassword}
        onVisibilityChange={setShowPassword}
        visibilityToggleIcon={VisibilityToggleIcon}
        rightSectionWidth={37}
        classNames={{
          root: classes.root,
          label: classes.label,
          input: `${classes.passwordInput} ${classes.left} ${loading ? classes.loading : ''}`,
          innerInput: classes.innerInput,
          error: classes.error,
        }}
      />
    );
  }
}
