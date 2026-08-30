import type { SVGProps } from 'react';

export function CircleXFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="m15 9-6 6"
        stroke="var(--mantine-color-ubhNeutral-0)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m9 9 6 6"
        stroke="var(--mantine-color-ubhNeutral-0)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
