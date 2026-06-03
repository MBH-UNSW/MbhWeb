import { Avatar as MantineAvatar } from '@mantine/core';
import { User } from 'lucide-react';

import classes from './Avatar.module.css';

type AvatarType = 'initials' | 'blank';

type AvatarSize = 'sm' | 'md' | 'lg' | 'display';

type AvatarProps = {
  type?: AvatarType;
  size?: AvatarSize;
  initials?: string;
};

export function Avatar({
  type = 'blank',
  size = 'md',
  initials = 'AR',
}: AvatarProps) {
  let avatarSize = 48;
  let fontSize = 20;
  let iconSize = 24;

  if (size === 'sm') {
    avatarSize = 32;
    fontSize = 14;
    iconSize = 16;
  } else if (size === 'lg') {
    avatarSize = 64;
    fontSize = 28;
    iconSize = 32;
  } else if (size === 'display') {
    avatarSize = 100;
    fontSize = 40;
    iconSize = 48;
  }

  // initial variant
  if (type === 'initials') {
    return (
      <MantineAvatar
        size={avatarSize}
        radius="50%"
        classNames={{
          root: classes.root,
        }}
        style={{ fontSize }}
      >
        {initials}
      </MantineAvatar>
    );
  }

  // blank variant
  return (
    <MantineAvatar
      size={avatarSize}
      radius="50%"
      classNames={{
        root: classes.root,
        placeholder: classes.placeholder,
      }}
    >
      <User size={iconSize} />
    </MantineAvatar>
  );
}