import pSBC from "./pSBC";

export const getThemeColors = (colors) => {
  return {
    primary: {
      50: pSBC(0.8, colors.primary, false, true),
      100: pSBC(0.4, colors.primary, false, true),
      200: pSBC(0.3, colors.primary, false, true),
      300: pSBC(0.2, colors.primary, false, true),
      400: pSBC(0.1, colors.primary, false, true),
      500: pSBC(0, colors.primary, false, true),
      600: pSBC(-0.1, colors.primary, false, true),
      700: pSBC(-0.2, colors.primary, false, true),
      800: pSBC(-0.3, colors.primary, false, true),
      900: pSBC(-0.4, colors.primary, false, true),
    },
    secondary: {
      50: pSBC(0.8, colors.secondary, false, true),
      100: pSBC(0.4, colors.secondary, false, true),
      200: pSBC(0.3, colors.secondary, false, true),
      300: pSBC(0.2, colors.secondary, false, true),
      400: pSBC(0.1, colors.secondary, false, true),
      500: pSBC(0, colors.secondary, false, true),
      600: pSBC(-0.1, colors.secondary, false, true),
      700: pSBC(-0.2, colors.secondary, false, true),
      800: pSBC(-0.3, colors.secondary, false, true),
      900: pSBC(-0.4, colors.secondary, false, true),
    },
    accent: {
      50: pSBC(0.8, colors.accent, false, true),
      100: pSBC(0.4, colors.accent, false, true),
      200: pSBC(0.3, colors.accent, false, true),
      300: pSBC(0.2, colors.accent, false, true),
      400: pSBC(0.1, colors.accent, false, true),
      500: pSBC(0, colors.accent, false, true),
      600: pSBC(-0.1, colors.accent, false, true),
      700: pSBC(-0.2, colors.accent, false, true),
      800: pSBC(-0.3, colors.accent, false, true),
      900: pSBC(-0.4, colors.accent, false, true),
    },
    bg: {
      50: pSBC(0.8, colors.bg, false, true),
      100: pSBC(0.4, colors.bg, false, true),
      200: pSBC(0.3, colors.bg, false, true),
      300: pSBC(0.2, colors.bg, false, true),
      400: pSBC(0.1, colors.bg, false, true),
      500: pSBC(0, colors.bg, false, true),
      600: pSBC(-0.1, colors.bg, false, true),
      700: pSBC(-0.2, colors.bg, false, true),
      800: pSBC(-0.3, colors.bg, false, true),
      900: pSBC(-0.4, colors.bg, false, true),
    },
  };
};

export const getBrightness = (color) => {
  const c = color?.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma > 150 ? "light" : "dark";
};

export const getColorShades = (inputColors) => {
  const isValidHex = (color) =>
    /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i.test(color);

  const generateColorShades = (baseColor) => {
    if (!isValidHex(baseColor)) {
      console.error(`Invalid hex code: ${baseColor}`);
      return baseColor; // or provide a default value
    }

    return {
      50: pSBC(0.8, baseColor, false, true),
      100: pSBC(0.4, baseColor, false, true),
      200: pSBC(0.3, baseColor, false, true),
      300: pSBC(0.2, baseColor, false, true),
      400: pSBC(0.1, baseColor, false, true),
      500: pSBC(0, baseColor, false, true),
      600: pSBC(-0.1, baseColor, false, true),
      700: pSBC(-0.2, baseColor, false, true),
      800: pSBC(-0.3, baseColor, false, true),
      900: pSBC(-0.4, baseColor, false, true),
    };
  };

  const processNestedColors = (nestedColors) => {
    const result = {};
    for (const key in nestedColors) {
      if (nestedColors.hasOwnProperty(key)) {
        const nestedColorValue = nestedColors[key];
        if (typeof nestedColorValue === "string") {
          if (!isValidHex(nestedColorValue)) {
            console.error(`Invalid hex code for ${key}: ${nestedColorValue}`);
            result[key] = nestedColorValue; // or provide a default value
          } else {
            result[key] = generateColorShades(nestedColorValue);
          }
        } else if (typeof nestedColorValue === "object") {
          result[key] = processNestedColors(nestedColorValue);
        }
      }
    }
    return result;
  };

  const themeColors = processNestedColors(inputColors);
  return themeColors;
};
