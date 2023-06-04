import type { ApiMeta } from '@/plugins/type'

export default [
  {
    name: 'getList',
    path: '/article/search_all',
    description: '请求文章'
  },
  {
    name: 'getContent',
    path: '/article/get_article_content',
    description: '请求文章内容'
  },
  {
    name: 'addArticle',
    path: '/article/upsert_article',
    description: '添加文章'
  }
] as ApiMeta[]
