const LANGUAGE_KEY = 'lng'

export enum Languages {
  RU = 'ru',
  EN = 'en',
  RO = 'ro',
}

export const useLanguage = () => {
  const get = () => {
    return localStorage.getItem(LANGUAGE_KEY)
  }

  const set = (value: Languages) => {
    localStorage.setItem(LANGUAGE_KEY, value)
  }

  return {
    get,
    set,
  }
}
