import { Pill } from '@mantine/core';
import classes from './Pill.module.css';

type PillVariant = 'solid' | 'outlined';
type PillSize = 'sm' | 'md' | 'lg';

type PillProps = {
  variant?: PillVariant;
  size?: PillSize;
  label?: string;
};

function getPillColour(label?: string) {
  if (label === 'Emergency') {
    return 'var(--emergency-pill-fill)';
  }
  if (label === 'Appointment Making') {
    return 'var(--appt-pill-fill)';
  }
  if (label === 'Supply Restock') {
    return 'var(--supply-pill-fill)';
  }
  if (label === 'General Question') {
    return 'var(--gen-pill-fill)';
  }
  return 'var(--mantine-color-neutral-6)';
}

function setLabelSize(size: PillSize) {
  if (size === 'sm') {
    return 'var(--mantine-font-size-xs)';
  } else if (size === 'md') {
    return 'var(--mantine-font-size-sm)';
  } else if (size === 'lg') {
    return 'var(--mantine-font-size-md)';
  }
}

export function PillInput({ variant = 'solid', size = 'md', label }: PillProps) {
  const colour = getPillColour(label);
  const textSize = setLabelSize(size);

  return (
    <Pill
      size={size}
      classNames={{
        root: variant === 'solid' ? classes.solidPill : classes.outlinedPill,
        label: classes.label,
      }}
      style={{
        '--pill-colour': colour,
        '--text-size': textSize,
      }}
    >
      {label}
    </Pill>
  );
}
