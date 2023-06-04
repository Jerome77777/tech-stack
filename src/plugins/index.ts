import { getLocalStorage } from '@/utils/storage'
import { httpclient } from './httpclient'
import type { ApiMeta } from './type'
import { USER_INFO } from '@/utils/constants'

//@ts-ignore
const modules: Record<string, any> = import.meta.glob('../api/**/*.ts', { eager: true })

const map = new Map<string, ApiMeta>()

Object.keys(modules).forEach((key) => {
  const filename = key.match(/\/([^/]+)\.\w+$/)?.[1] || ''
  const list: ApiMeta[] = modules[key].default
  list.forEach((item) => {
    map.set(filename + '/' + item.name, item)
  })
})

export const $post = (path: string, data: any) => {
  const config = map.get(path)
  const userinfo = getLocalStorage(USER_INFO)
  if (userinfo) {
    data.uid = userinfo.uid
  }
  return httpclient({
    url: config?.path,
    data: data,
    method: 'POST'
  }) as Promise<any>
}
