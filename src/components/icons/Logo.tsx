import type { SVGProps } from 'react';
import HeartLogo from '../../assets/heartLogo.svg?react'
import HeartLogoWithText from '../../assets/heartLogoWithText.svg?react'

const logoColour = 'light-dark(var(--mantine-color-ubhRed-5), var(--mantine-color-ubhRed-9))';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <HeartLogo
      {...props}
      style={{
        color: logoColour,
        ...props.style,
      }}
    />
  );
}

export function FullLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <HeartLogoWithText
      {...props}
      style={{
        color: logoColour,
        ...props.style,
      }}
    />
  );
}
