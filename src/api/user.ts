import type { ApiMeta } from '@/plugins/type'

export default [
  {
    name: 'login',
    path: '/user/login',
    description: '登录'
  },
  {
    name: 'register',
    path: '/user/register',
    description: '注册'
  }
] as ApiMeta[]
