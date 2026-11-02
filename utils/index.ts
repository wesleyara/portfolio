import type { Locale, Localized } from "./constants";

/** Picks the string for the active locale, falling back to Portuguese. */
export const pick = (value: Localized, locale: string) =>
  value[locale as Locale] ?? value.pt;
