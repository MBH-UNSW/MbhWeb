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
      '#edf2f7',
      '#e6f0fa',
      '#c8ddf3',
      '#aacaec',
      '#8eb8e5',
      '#6fa4dd',
      '#5292d6',
      '#337ecf',
      '#146ac7',
      '#0056b3',
    ],
    neutral: [
      '#ffffff',
      '#fafafa',
      '#f2f2f2',
      '#d9d9d9',
      '#c9c9c9',
      '#bdbdbd',
      '#a0a0a0',
      '#999999',
      '#727272',
      '#393939',
    ],
  },
  primaryColor: 'ubhRed',
  primaryShade: 9,

  other: {
    error: {
      text: '#cc0000',
      background: '#fef5f5',
      border: '#e57373',
      shadow: '#941f1f',
    },
    success: {
      text: '#2e7d32',
      background1: '#f8fcf8',
      background2: '#e8f5e8',
      border: '#4caf50',
      shadow: '#2e7d32',
    },
    transition: {
      fast: '0.1s ease',
      base: '0.15s ease',
      slow: '0.25s ease',
    },
    borderWidth: {
      default: '1px',
      thick: '2px',
    },
  },

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
    xxxs: '2px',
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

  lineHeights: {
    xs: '1.2',
    sm: '1.4',
    md: '1.5',
    lg: '1.7',
  },

  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  shadows: {
    error: '0px 1px 1px #941f1f',
  },

  // TODO - Custom component override for button types.
});
