import { configure, defineRule } from 'vee-validate'
import { confirmed, min, min_value, required } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import fr from '@vee-validate/i18n/dist/locale/fr.json'

defineRule('required', required)
defineRule('min', min)
defineRule('min_value', min_value)
defineRule('confirmed', confirmed)

export function isOldEnough(value: number): boolean {
  return value <= new Date().getFullYear() - 18
}

defineRule('isOldEnough', isOldEnough)

configure({
  generateMessage: localize({
    en: {
      messages: {
        ...en.messages,
        isOldEnough: "You're not old enough to bet on ponies.",
      },
    },
    fr: {
      messages: {
        ...fr.messages,
        isOldEnough: "Vous n'êtes pas assez âgé·e pour parier sur des poneys.",
      },
    },
  }),
})

export function useForms() {
  return {}
}