export function setLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalStorage(key: string) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || '')
    return data
  } catch (error) {
    console.error(error)
  }
  return ''
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key)
}
