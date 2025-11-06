/**
 * @umituz/react-native-theme - Public API
 *
 * Theme management system for React Native apps
 * Provides colors, design tokens, and theme state management
 *
 * Usage:
 *   import { useAppDesignTokens, useDesignSystemTheme, lightColors, darkColors } from '@umituz/react-native-theme';
 */

// =============================================================================
// COLOR PALETTE
// =============================================================================

export {
  lightColors,
  darkColors,
  getColorPalette,
  withAlpha,
  type ColorPalette,
  type ThemeMode,
} from './core/ColorPalette';

// =============================================================================
// TOKEN FACTORY
// =============================================================================

export {
  createDesignTokens,
  STATIC_DESIGN_TOKENS,
  type DesignTokens,
} from './core/TokenFactory';

// =============================================================================
// HOOKS
// =============================================================================

export { useAppDesignTokens } from './hooks/useAppDesignTokens';
export { useDesignSystemTheme } from './infrastructure/globalThemeStore';

