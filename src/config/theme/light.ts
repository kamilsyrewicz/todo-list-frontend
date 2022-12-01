import generateTheme from "./generateTheme";

export const solidColors = {
  primary: {
    10: "#0C0024",
    30: "#20113E",
    50: "#310D75",
    60: "#663FBA",
    65: "#7C58CA",
    70: "#A796D9",
  },
  secondary: {
    5: "#FCFBFE",
    10: "#F7F5FC",
    25: "#F2EEFE",
    30: "#E9E2FE",
    40: "#DCD0FE",
    50: "#B58DFF",
  },
  success: {
    10: "#007D4C",
    30: "#00A664",
    50: "#00CA7A",
    70: "#17E392",
    80: "#4DFFB8",
    90: "#E6FAF2",
    100: "#F2FCF8",
  },
  error: {
    10: "#962237",
    30: "#C92E4A",
    50: "#FC395C",
    70: "#FF6682",
    80: "#FF99AB",
    90: "#FFEBEF",
    100: "#FFF5F7",
  },
  gray: {
    0: "#0C0024",
    30: "#554D66",
    50: "#858091",
    60: "#B6B3BD",
    70: "#CECCD3",
    80: "#E7E6E9",
    85: "#E8E8E8",
    90: "#F7F7F8",
    100: "#FFFFFF",
  },
};

export const transparentColors = {
  primary: {
    90: "rgba(181, 141, 255, .9)",
    70: "rgba(181, 141, 255, .7)",
    50: "rgba(181, 141, 255, .5)",
    30: "rgba(181, 141, 255, .3)",
    10: "rgba(181, 141, 255, .1)",
    5: "rgba(181, 141, 255, .05)",
  },
  success: {
    90: "rgba(0, 202, 122, .9)",
    70: "rgba(0, 202, 122, .7)",
    50: "rgba(0, 202, 122, .5)",
    30: "rgba(0, 202, 122, .3)",
    10: "rgba(0, 202, 122, .1)",
    5: "rgba(0, 202, 122, .05)",
  },
  error: {
    90: "rgba(252, 57, 92, .9)",
    70: "rgba(252, 57, 92, .7)",
    50: "rgba(252, 57, 92, .5)",
    30: "rgba(252, 57, 92, .3)",
    10: "rgba(252, 57, 92, .1)",
    5: "rgba(252, 57, 92, .05)",
  },
  gray: {
    70: "rgba(12, 0, 36, 0.7)",
    50: "rgba(12, 0, 36, 0.5)",
    40: "rgba(12, 0, 36, 0.4)",
    20: "rgba(12, 0, 36, 0.2)",
    10: "rgba(12, 0, 36, 0.1)",
  },
};

export type SolidColorsTypes = typeof solidColors;
export type TransparentColorsTypes = typeof transparentColors;
export const themeLight = generateTheme({ solidColors });
