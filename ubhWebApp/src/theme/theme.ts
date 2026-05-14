import { createTheme } from '@mantine/core';

export const theme = createTheme({
  // UBH Colors (TEMP COLORS!!)
  colors: {
    ubhRed: [
      '#fbeeee',
      '#f1dada',
      '#e6b0b0',
      '#dd8383',
      '#d55f5d',
      '#d04845',
      '#cf3c38',
      '#b72f2b',
      '#a42825',
      '#941f1f', // Our Figma's Default
    ],
    ubhBlue: [
      '#e1f8ff',
      '#cbedff',
      '#9ad7ff',
      '#64c1ff',
      '#3aaefe',
      '#20a2fe',
      '#099cff',
      '#0088e4',
      '#0079cd',
      '#0068b6',
    ],
  },
  primaryColor: 'ubhRed',
  primaryShade: 9,

  // Typography
  fontFamily: 'Inter, sans-serif',

  fontSizes: {
    xs: '12px', // Caption / Label
    sm: '14px', // Body2 / Subtitle1
    md: '16px', // Body1 (base)
    lg: '20px', // Header5
    xl: '24px', // Header4
  },

  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '40px', lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: '32px', lineHeight: '1.3', fontWeight: '600' },
      h3: { fontSize: '28px', lineHeight: '1.35', fontWeight: '500' },
      h4: { fontSize: '24px', lineHeight: '1.4', fontWeight: '400' },
      h5: { fontSize: '20px', lineHeight: '1.45', fontWeight: '400' },
      h6: { fontSize: '16px', lineHeight: '1.5', fontWeight: '400' }, // Same as Base
    },
  },

  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  defaultRadius: 'sm',
  radius: {
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '16px',
    xl: '18px',
    xxl: '24px',
  },

  // TODO - Custom component override for button types.
});
