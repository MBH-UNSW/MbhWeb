import { Checkbox } from '@mantine/core';
import classes from './Checkbox.module.css';

type CheckboxProps = {
  label?: string;
  description?: string;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CheckboxInput({
  label,
  description,
  checked,
  error,
  disabled,
  onChange,
}: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      description={description}
      iconColor="var(--mantine-color-neutral-9)"
      color="var(--mantine-color-neutral-4)"
      variant="outline"
      radius="xs"
      checked={checked}
      onChange={onChange}
      error={error}
      disabled={disabled}
      classNames={{
        root: classes.root,
        label: classes.label,
        input: classes.checkbox,
        description: classes.description,
        error: classes.error,
      }}
    />
  );
}
