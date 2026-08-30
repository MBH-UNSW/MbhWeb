import type { SVGProps } from 'react';

export function CircleAlertFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="var(--mantine-color-ubhRed-8)" />
      <line
        x1="12"
        x2="12"
        y1="8"
        y2="12"
        stroke="var(--mantine-color-ubhNeutral-0)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="12"
        x2="12.01"
        y1="16"
        y2="16"
        stroke="var(--mantine-color-ubhNeutral-0)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
