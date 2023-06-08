import {languages} from '@/app/i18n/settings'
export function generateLocalePath(path) {
  return languages.map(locale => {
    return {
      locale: locale,
      path: path && path !== '/' ? `/${locale}/${path}` : `/${locale}`
    }
  })
}
