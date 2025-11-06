/**
 * @umituz/react-native-theme - Public API
 *
 * Theme management system for React Native apps
 * Provides colors, design tokens, and theme state management
 *
 * Usage:
 *   import { useAppDesignTokens, useDesignSystemTheme, lightColors, darkColors, BASE_TOKENS } from '@umituz/react-native-theme';
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
// BASE TOKENS - Static Design Tokens
// =============================================================================

export {
  BASE_TOKENS,
  STATIC_TOKENS,
  spacing,
  typography,
  borders,
  iconSizes,
  opacity,
  avatarSizes,
  sizes,
  type Spacing,
  type Typography,
  type Borders,
  type IconSizes,
  type Opacity,
  type AvatarSizes,
  type Sizes,
  type BaseTokens,
} from './core/BaseTokens';

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

