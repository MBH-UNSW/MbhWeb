import { Switch } from '@mantine/core';
import classes from './Toggle.module.css';

type ToggleProps = {
  label?: string;
  description?: string;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ToggleSwitch({
  label,
  description,
  checked,
  error,
  disabled,
  onChange,
}: ToggleProps) {
  return (
    <Switch
      label={label}
      description={description}
      withThumbIndicator={false}
      onLabel="ON"
      offLabel="OFF"
      checked={checked}
      onChange={onChange}
      error={error}
      disabled={disabled}
      classNames={{
        root: classes.root,
        label: classes.label,
        input: classes.input,
        track: classes.toggle,
        thumb: classes.thumb,
        description: classes.description,
        error: classes.error,
      }}
    />
  );
}
