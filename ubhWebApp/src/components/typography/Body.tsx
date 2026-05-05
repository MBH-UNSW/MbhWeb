import { Text } from "@mantine/core"

//-------------------------------
//  Body Text Wrappers
//-------------------------------

export const Body1 = ({ children }: { children: React.ReactNode }) => (
    <Text size="md">
        {children}
    </Text>
);

export const Body2 = ({ children }: { children: React.ReactNode }) => (
    <Text size="sm">
        {children}
    </Text>
);


//-------------------------------
//  Caption Text Wrappers
//-------------------------------

export const Caption = ({ children }: { children: React.ReactNode }) => (
    <Text size="xs">
        {children}
    </Text>
);