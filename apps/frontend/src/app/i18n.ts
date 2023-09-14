import { createI18n } from 'vue-i18n'

import de from './translations/de.json'
import en from './translations/en.json'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'de',
  fallbackLocale: /* import.meta.env.VITE_I18N_FALLBACK_LOCALE ||*/ 'en',
  messages: { en, de }
})
