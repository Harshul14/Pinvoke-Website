/**
 * Centralized application configuration.
 *
 * All feature flags and environment-driven settings are read here
 * and exported as typed constants. Import from this module instead
 * of reading `process.env` directly throughout the codebase.
 */

/**
 * Whether Google AdSense ads are enabled.
 *
 * Controlled via the `NEXT_PUBLIC_ENABLE_ADS` environment variable.
 * Set to "true" in `.env` (or your hosting provider's env config) to
 * enable ads; any other value (or omission) disables them entirely.
 */
export const ENABLE_ADS: boolean =
  process.env.NEXT_PUBLIC_ENABLE_ADS === "true";

/**
 * Google AdSense Publisher ID.
 * Example: "ca-pub-1234567890123456"
 */
export const ADSENSE_CLIENT: string =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

/**
 * Google AdSense Ad Slot ID.
 * Example: "1234567890"
 */
export const ADSENSE_SLOT: string =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "";
