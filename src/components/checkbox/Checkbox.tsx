import { Checkbox, type CheckboxIconComponent } from '@mantine/core';
import { Check } from 'lucide-react';

import classes from './Checkbox.module.css';

type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type CheckboxProps = {
  label?: string;
  description?: string;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
  size?: CheckboxSize;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxIcon: CheckboxIconComponent = ({ ...others }) => (
  <Check {...others} color="var(--mantine-color-ubhNeutral-0)" strokeWidth={3} size="100%" />
);

const checkboxSizes: Record<CheckboxSize, string> = {
  xs: '14px',
  sm: '18px',
  md: '22px',
  lg: '26px',
  xl: '30px',
};

export function CheckboxInput({
  label,
  description,
  checked,
  error,
  disabled,
  size = 'md',
  onChange,
}: CheckboxProps) {
  return (
    <Checkbox
      size={size}
      vars={() => ({
        root: {
          '--checkbox-size': checkboxSizes[size],
        },
      })}
      label={label}
      description={description}
      icon={CheckboxIcon}
      variant="outline"
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
