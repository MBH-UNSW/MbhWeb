import { ActionIcon, Tooltip } from '@mantine/core';
import { type LucideIcon, X } from 'lucide-react';

import classes from './IconButton.module.css';
import { Caption } from '../typography/Body';

type IconButtonVariant = 'default' | 'outlined' | 'text';

type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type IconButtonProps = {
  icon?: LucideIcon;
  tooltip?: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  onClick?: () => void; // Temporary Placeholder
};

export function IconButton({
  icon: Icon = X,
  tooltip,
  variant = 'default',
  size = 'md',
  disabled,
  onClick,
}: IconButtonProps) {
  let mantineVariant = 'filled';

  if (variant === 'outlined') {
    mantineVariant = 'outline';
  } else if (variant === 'text') {
    mantineVariant = 'transparent';
  }

  let iconSize = 20;
  let buttonSize = 39;

  if (size === 'xs') {
    iconSize = 14;
    buttonSize = 26;
  } else if (size === 'sm') {
    iconSize = 16;
    buttonSize = 32;
  } else if (size === 'lg') {
    iconSize = 24;
    buttonSize = 43;
  } else if (size === 'xl') {
    iconSize = 28;
    buttonSize = 47;
  }

  return (
    <Tooltip
      label={<Caption>{tooltip}</Caption>}
      disabled={!tooltip}
      position="top"
      offset={1}
      withArrow
      arrowSize={5}
      arrowRadius={1}
      classNames={{ tooltip: classes.tooltip }}
    >
      <ActionIcon
        variant={mantineVariant}
        size={buttonSize}
        disabled={disabled}
        onClick={onClick}
        classNames={{
          root: `${classes.root} ${classes[variant]}`,
        }}
      >
        <Icon size={iconSize} />
      </ActionIcon>
    </Tooltip>
  );
}
