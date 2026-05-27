import { Title, Divider } from '@mantine/core';

type HeaderAlign = 'left' | 'center' | 'right';

type HeaderProps = {
  children: React.ReactNode;
  color?: string;
  align?: HeaderAlign;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  // lineThrough?: boolean;
}

//-------------------------------
//  Header Props Wrapper
//-------------------------------
function propsWrapper({
  children,
  color,
  align,
  italic,
  bold,
  underline,
}: HeaderProps) {
  return {
    children,
    c: color,
    ta: align,
    fs: italic ? ('italic' as const) : undefined,
    fw: bold ? 700 : undefined,
    td: underline ? ('underline' as const) : undefined,
  };
}

export const Header1 = (props: HeaderProps) => <Title order={1} {...propsWrapper(props)} />;

export const Header2 = (props: HeaderProps) => <Title order={2} {...propsWrapper(props)} />;

export const Header3 = (props: HeaderProps) => <Title order={3} {...propsWrapper(props)} />;

export const Header4 = (props: HeaderProps) => <Title order={4} {...propsWrapper(props)} />;

export const Header5 = (props: HeaderProps) => <Title order={5} {...propsWrapper(props)} />;

export const Header6 = (props: HeaderProps) => <Title order={6} {...propsWrapper(props)} />;


// Little header thingy for separating the components page cleanly
export function SectionHeader({ children }: {children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '32px', marginBottom: '16px' }}>
      <Header2 color="var(--mantine-color-ubhRed-9)">{children}</Header2>
      <Divider color="var(--mantine-color-ubhRed-9)" size="sm" mt="xxs" />
    </div>
  );
}