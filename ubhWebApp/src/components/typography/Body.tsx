import { Text } from '@mantine/core';

type BodyAlign = 'left' | 'center' | 'right';

type BodyProps = {
  children: React.ReactNode;
  color?: string;
  align?: BodyAlign;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  // lineThrough?: boolean;
}

//-------------------------------
//  Body Props Wrapper
//-------------------------------
function propsWrapper({
  children,
  color,
  align,
  italic,
  bold,
  underline,
}: BodyProps) {
  return {
    children,
    c: color,
    ta: align,
    fs: italic ? ('italic' as const) : undefined,
    fw: bold ? 700 : undefined,
    td: underline ? ('underline' as const) : undefined,
  };
}
//-------------------------------
//  Body Text Wrappers
//-------------------------------

export const Body1 = (props: BodyProps) => <Text size="md" {...propsWrapper(props)} />;

export const Body2 = (props: BodyProps) => <Text size="sm" {...propsWrapper(props)} />;

//-------------------------------
//  Caption Text Wrappers
//-------------------------------

export const Caption = (props: BodyProps) => <Text size="xs" {...propsWrapper(props)} />;