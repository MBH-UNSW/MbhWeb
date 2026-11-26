import { Pill } from '@mantine/core';

import classes from './Pill.module.css';

type PillVariant = 'solid' | 'outlined' | 'status';
type PillSize = 'sm' | 'md' | 'lg';
export type PillStatus = 'good' | 'critical';

type PillProps = {
  variant?: PillVariant;
  size?: PillSize;
  bold?: boolean;
  label?: string;
  status?: PillStatus;
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
  return 'var(--mantine-color-ubhNeutral-6)';
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

function setLabelWeight(bold: boolean) {
  if (bold) {
    return 'var(--mantine-font-weight-semibold)';
  }
  return 'var(--mantine-font-weight-regular)';
}

export function PillInput({
  variant = 'solid',
  size = 'md',
  bold = false,
  label,
  status,
}: PillProps) {
  const colour = getPillColour(label);
  const textSize = setLabelSize(size);
  const textWeight = setLabelWeight(bold);

  return (
    <Pill
      size={size}
      data-status={variant === 'status' ? status : undefined}
      classNames={{
        root: classes[`${variant}Pill`],
        label: classes.label,
      }}
      style={{
        '--pill-colour': colour,
        '--text-size': textSize,
        '--text-weight': textWeight,
      }}
    >
      {label}
    </Pill>
  );
}
