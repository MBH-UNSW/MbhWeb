import { Title } from '@mantine/core';

//-------------------------------
//  Header Title Wrappers
//-------------------------------

export const Header1 = ({ children }: { children: React.ReactNode }) => (
  <Title order={1}>{children}</Title>
);

export const Header2 = ({ children }: { children: React.ReactNode }) => (
  <Title order={2}>{children}</Title>
);

export const Header3 = ({ children }: { children: React.ReactNode }) => (
  <Title order={3}>{children}</Title>
);

export const Header4 = ({ children }: { children: React.ReactNode }) => (
  <Title order={4}>{children}</Title>
);

export const Header5 = ({ children }: { children: React.ReactNode }) => (
  <Title order={5}>{children}</Title>
);

export const Header6 = ({ children }: { children: React.ReactNode }) => (
  <Title order={6}>{children}</Title>
);
