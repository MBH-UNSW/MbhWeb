import { Progress } from '@mantine/core';

import classes from './LoadingBar.module.css';

type LoadingBarStatus = 'default' | 'paused' | 'success' | 'error';

type LoadingBarProps = {
  status?: LoadingBarStatus;
  progress?: number;
  label?: string;
  showLabel?: boolean;
};

export function LoadingBar({
  status = 'default',
  progress = 0,
  label,
  showLabel = true,
}: LoadingBarProps) {
  let color = '#67AF6F';

  if (status === 'paused') {
    color = '#FAC226';
  } else if (status === 'error') {
    color = '#F3483B';
  }

  return (
    <div className={classes.root}>
      {showLabel && label && (
        <span className={classes.label}>{label}</span>
      )}
      <Progress
        value={progress}
        color={color}
        size={18}
        radius={9}
        classNames={{
          root: classes.track,
          section: classes.section,
        }}
      />
    </div>
  );
}