import { Button as MantineButton } from "@mantine/core";
import { type LucideIcon } from "lucide-react";

import classes from './Button.module.css'

type ButtonVariant = 'default' | 'outlined' | 'text';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  disabled?: boolean;
  onClick?: () => void;   // Temporary Placeholder
  fullWidth?: boolean;
};

export function Button({
  children,
  variant = 'default',
  size = 'md',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled,
  onClick,
  fullWidth
}: ButtonProps) {

  let mantineVariant = 'filled';

  if (variant === 'outlined') {
    mantineVariant = 'outline';
  } else if (variant === 'text') {
    mantineVariant = 'transparent';
  }

  let iconSize = 16;

  if (size === 'xs') {
    iconSize = 12;
  } else if (size === 'sm') {
    iconSize = 14;
  } else if (size === 'lg') {
    iconSize = 20;
  } else if (size === 'xl') {
    iconSize = 24;
  }

  return (
    <MantineButton
      variant={mantineVariant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      leftSection={
        LeftIcon ? <LeftIcon size={iconSize} /> : undefined
      }
      rightSection={
        RightIcon ? <RightIcon size={iconSize} /> : undefined
      }
      classNames={{
        root: `${classes.root} ${classes[variant]}`,
      }}
    >
      {children}
    </MantineButton>
  );
}