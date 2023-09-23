export interface Aritcle {
  articleAuthorName: string
  articleCategory: string
  articleContent: string
  articleId: string
  articleIntroduction: string
  articleLabel: string
  articleName: string
  authorId: string
  createTime: string
  numOfWords: number
}

export interface ArticleForm {
  searchAll?: string
  articleShelf: string
  searchType: string
  page: number
  pageSize: number
}
