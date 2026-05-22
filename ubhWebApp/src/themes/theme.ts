import { createTheme } from '@mantine/core';

import { ubhRed, ubhBlue, neutral } from './colors';
import { typography } from './typography';

export const theme = createTheme({
  colors: {
    ubhRed,
    ubhBlue,
    neutral,
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

  ...typography,
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
});
