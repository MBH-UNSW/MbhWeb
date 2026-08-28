import { PinInput } from '@mantine/core';
import classes from './Passcode.module.css';

type PasscodeProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
};

export function Passcode({
  placeholder,
  value,
  onChange,
  disabled,
  error,
  success,
}: PasscodeProps) {
  return (
    <PinInput
      type="number"
      placeholder={placeholder || ''}
      error={error}
      disabled={disabled}
      value={value}
      onChange={onChange}
      mask
      classNames={{
        root: classes.root,
        input: `${classes.passcode} ${success ? classes.success : ''}`,
      }}
    />
  );
}
