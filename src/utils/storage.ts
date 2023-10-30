export function setLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalStorage(key: string) {
  try {
    const storage = localStorage.getItem(key)
    if (storage && typeof storage == 'string') {
      return JSON.parse(storage)
    }
    return ''
  } catch (error) {
    console.error(error)
    return ''
  }
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key)
}
