import { createTheme } from "@mantine/core";

import { ubhRed, ubhBlue } from "./colors";
import { typography } from "./typography";

export const theme = createTheme({
  colors: {
    ubhRed,
    ubhBlue,
  },

  primaryColor: "ubhRed",
  primaryShade: 9,

  ...typography,
  spacing: {
      xxs: "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
  },

  defaultRadius: "sm",

  radius: {
    xs: "8px",
    sm: "10px",
    md: "12px",
    lg: "16px",
    xl: "18px",
    xxl: "24px",
  },
});