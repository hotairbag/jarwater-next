export const locales = [
  'en',
  'ja',
  'ko',
  'es',
  'pt-BR',
  'th',
  'id',
  'fr',
  'zh-CN',
  'ar',
  'de',
  'de-CH',
  'no',
  'da',
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'pt-BR': 'Português (BR)',
  'th': 'ไทย',
  'id': 'Bahasa Indonesia',
  'fr': 'Français',
  'zh-CN': '简体中文',
  'ar': 'العربية',
  'de': 'Deutsch',
  'de-CH': 'Schweizerdeutsch',
  'no': 'Norsk',
  'da': 'Dansk',
};

export const rtlLocales: Locale[] = ['ar'];

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
