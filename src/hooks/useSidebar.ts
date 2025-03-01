const SIDEBAR_KEY = 'sb'

export const useSidebar = () => {
  const get = () => {
    console.log('GET')
    return Boolean(localStorage.getItem(SIDEBAR_KEY))
  }

  const set = (value: boolean) => {
    console.log('SET')
    localStorage.setItem(SIDEBAR_KEY, String(value))
  }

  return {
    get,
    set,
  }
}
