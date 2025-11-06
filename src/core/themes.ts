/**
 * Theme Objects - Light and Dark Themes
 *
 * Combines BASE_TOKENS + ColorPalette into complete theme objects
 */

import { BASE_TOKENS } from './BaseTokens';
import { lightColors, darkColors } from './ColorPalette';
import type { ColorPalette } from './ColorPalette';

/**
 * Extended color palette with app-specific gradients
 */
export interface ExtendedColorPalette extends ColorPalette {
  settingGradients: {
    language: [string, string];
    themeLight: [string, string];
    themeDark: [string, string];
    sound: [string, string];
    breathing: [string, string];
    achievements: [string, string];
    delete: [string, string];
    info: [string, string];
    heart: [string, string];
    refresh: [string, string];
    notifications: [string, string];
  };
}

/**
 * Complete Theme Object
 * Combines colors, spacing, typography, borders, and app-specific values
 */
export interface Theme {
  colors: ExtendedColorPalette;
  spacing: typeof BASE_TOKENS.spacing;
  typography: typeof BASE_TOKENS.typography;
  borders: typeof BASE_TOKENS.borders;
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  iconSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    hero: number;
  };
  opacity: {
    disabled: number;
    inactive: number;
    subtle: number;
    medium: number;
    full: number;
  };
}

/**
 * Light Theme
 * Combines static BASE_TOKENS + lightColors
 */
export const lightTheme: Theme = {
  colors: {
    ...lightColors,
    // Settings gradients (optional - apps can override)
    settingGradients: {
      language: ['#667eea', '#764ba2'],
      themeLight: ['#f093fb', '#f5576c'],
      themeDark: ['#4facfe', '#00f2fe'],
      sound: ['#a8edea', '#fed6e3'],
      breathing: ['#d299c2', '#fef9d7'],
      achievements: ['#ffecd2', '#fcb69f'],
      delete: ['#fbc2eb', '#a6c1ee'],
      info: ['#a1c4fd', '#c2e9fb'],
      heart: ['#ff9a9e', '#fad0c4'],
      refresh: ['#FCD34D', '#F59E0B'],
      notifications: ['#3b82f6', '#8b5cf6'],
    },
  },
  spacing: BASE_TOKENS.spacing,
  typography: BASE_TOKENS.typography,
  borders: BASE_TOKENS.borders,

  // Legacy compatibility mappings
  borderRadius: {
    sm: BASE_TOKENS.borders.radius.sm,
    md: BASE_TOKENS.borders.radius.md,
    lg: BASE_TOKENS.borders.radius.lg,
    xl: BASE_TOKENS.borders.radius.xl,
    full: BASE_TOKENS.borders.radius.full,
  },

  // Icon sizes from spacing
  iconSizes: {
    xs: BASE_TOKENS.spacing.iconSizeSmall,
    sm: BASE_TOKENS.spacing.iconSizeSmall,
    md: BASE_TOKENS.spacing.iconSizeMedium,
    lg: BASE_TOKENS.spacing.iconSizeLarge,
    xl: BASE_TOKENS.spacing.iconSizeXLarge,
    xxl: BASE_TOKENS.spacing.iconSizeXLarge,
    hero: BASE_TOKENS.spacing.iconSizeHero,
  },

  // Opacity levels (static values)
  opacity: {
    disabled: 0.6,
    inactive: 0.7,
    subtle: 0.8,
    medium: 0.9,
    full: 1.0,
  },
} as const;

/**
 * Dark Theme
 * Combines static BASE_TOKENS + darkColors
 */
export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...darkColors,
    // Settings gradients (same as light theme - looks good in both)
    settingGradients: {
      language: ['#667eea', '#764ba2'],
      themeLight: ['#f093fb', '#f5576c'],
      themeDark: ['#4facfe', '#00f2fe'],
      sound: ['#a8edea', '#fed6e3'],
      breathing: ['#d299c2', '#fef9d7'],
      achievements: ['#ffecd2', '#fcb69f'],
      delete: ['#fbc2eb', '#a6c1ee'],
      info: ['#a1c4fd', '#c2e9fb'],
      heart: ['#ff9a9e', '#fad0c4'],
      refresh: ['#FCD34D', '#F59E0B'],
      notifications: ['#3b82f6', '#8b5cf6'],
    },
  },
} as const;

/**
 * Utility function for responsive design
 */
export const createResponsiveValue = <T>(
  theme: Theme,
  values: Partial<Record<string, T>>,
): T => {
  const value = values.xs || values.sm || Object.values(values)[0];
  if (value === undefined) {
    throw new Error('createResponsiveValue: No valid value found');
  }
  return value;
};

