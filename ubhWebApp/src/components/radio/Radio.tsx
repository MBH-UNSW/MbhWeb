import { Radio } from '@mantine/core';
import classes from './Radio.module.css';

type RadioProps = {
  label?: string;
  description?: string;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function RadioInput({ label, description, checked, error, disabled, onChange }: RadioProps) {
  return (
    <Radio
      label={label}
      description={description}
      color="var(--mantine-color-neutral-4)"
      variant="outline"
      checked={checked}
      onChange={onChange}
      error={error}
      disabled={disabled}
      classNames={{
        root: classes.root,
        label: classes.label,
        radio: classes.radio,
        icon: classes.icon,
        description: classes.description,
        error: classes.error,
      }}
    />
  );
}
