/**
 * useAppDesignTokens Hook - Theme-Aware Design Tokens
 *
 * ✅ Automatically reads theme from global store
 * ✅ No parameters needed - fully automatic!
 * ✅ Returns tokens for current theme (light/dark)
 * ✅ Single source of truth
 *
 * @example Usage (fully automatic theme-aware)
 * ```typescript
 * import { useAppDesignTokens } from '@umituz/react-native-design-system-theme';
 *
 * const MyComponent = () => {
 *   const tokens = useAppDesignTokens(); // Automatically uses current theme!
 *   return (
 *     <View style={{
 *       backgroundColor: tokens.colors.primary,
 *       padding: tokens.spacing.md
 *     }}>
 *       <Text style={tokens.typography.bodyLarge}>Hello!</Text>
 *     </View>
 *   );
 * };
 * ```
 *
 * How it works:
 * - Reads themeMode from global store (useDesignSystemTheme)
 * - App's theme store syncs to global store automatically
 * - All components get correct tokens without prop drilling
 * - Change theme once, everything updates!
 */

import { useMemo } from 'react';
import { createDesignTokens, type DesignTokens } from '../core/TokenFactory';
import { useDesignSystemTheme } from '../infrastructure/globalThemeStore';
import { BASE_TOKENS } from '../core/BaseTokens';
import { getColorPalette } from '../core/ColorPalette';

/**
 * Create fallback tokens - always returns valid tokens
 * Used when createDesignTokens fails or returns undefined
 */
const createFallbackTokens = (): DesignTokens => {
  const colors = getColorPalette('light');
  return {
    colors,
    spacing: BASE_TOKENS.spacing,
    typography: BASE_TOKENS.typography,
    iconSizes: BASE_TOKENS.iconSizes,
    opacity: BASE_TOKENS.opacity,
    avatarSizes: BASE_TOKENS.avatarSizes,
    borders: {
      ...BASE_TOKENS.borders,
      card: {
        ...BASE_TOKENS.borders.card,
        borderColor: colors.border,
      },
      input: {
        ...BASE_TOKENS.borders.input,
        borderColor: colors.border,
      },
    },
  };
};

export const useAppDesignTokens = (): DesignTokens => {
  // Safely get global theme store - hook always returns an object
  let themeMode: 'light' | 'dark' = 'light';
  try {
    const globalTheme = useDesignSystemTheme();
    themeMode = globalTheme.themeMode || 'light';
  } catch (error) {
    /* eslint-disable-next-line no-console */
    if (__DEV__) console.warn('[useAppDesignTokens] Failed to get global theme, using light theme');
    themeMode = 'light';
  }
  
  // Always return valid tokens - ensure themeMode is valid
  return useMemo(() => {
    try {
      // Validate themeMode
      const mode = (themeMode === 'light' || themeMode === 'dark') ? themeMode : 'light';
      
      // Create tokens
      const tokens = createDesignTokens(mode);
      
      // Validate tokens structure - must have all required properties
      if (
        !tokens ||
        typeof tokens !== 'object' ||
        !tokens.spacing ||
        !tokens.colors ||
        !tokens.typography ||
        !tokens.iconSizes ||
        !tokens.opacity ||
        !tokens.avatarSizes ||
        !tokens.borders
      ) {
        /* eslint-disable-next-line no-console */
        if (__DEV__) console.warn('[useAppDesignTokens] Invalid tokens structure, using fallback');
        return createFallbackTokens();
      }
      
      return tokens;
    } catch (error) {
      /* eslint-disable-next-line no-console */
      if (__DEV__) console.error('[useAppDesignTokens] Error creating tokens:', error);
      // Return fallback tokens
      return createFallbackTokens();
    }
  }, [themeMode]);
};

