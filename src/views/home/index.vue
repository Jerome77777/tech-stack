<template>
  <div class="wrapper">
    <div class="panel-default">
      <div class="panel-body">
        <div class="main-container">
          <div class="entry-list">
            <SubHeader />
            <links-list
              :article-list="articleList"
              :is-loading="isLoading"
              @search-more="handleSearchMore"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SubHeader from './components/subHeader/index.vue'
import LinksList from './components/articleList/index.vue'
import { $post } from '@/plugins'
import { useRouter } from 'vue-router'
import { Aritcle, ArticleForm } from './type'

const router = useRouter()
const articleList = ref<Aritcle[]>([])
const isLoading = ref(true)

const formModel = ref<ArticleForm>({
  articleShelf: '',
  searchType: '',
  page: 0,
  pageSize: 10
})

const categoryMap = {
  frontend: '前端',
  all: '全部',
  backend: '后端',
  bigdata: '大数据',
  rgzn: '人工智能',
  algorithm: '算法',
  framework: '框架',
  toolRecommendations: '工具推荐'
}

const handleSearchMore = () => {
  formModel.value.page++
  const type: string = router.currentRoute.value.params.type as string
  isLoading.value = true
  formModel.value.searchType = categoryMap[type]
  $post(type === 'all' ? 'article/getList' : 'article/searchByType', {
    ...formModel.value,
    searchAll: type === 'all' ? 'true' : undefined
  })
    .then((res: Aritcle[]) => {
      if (res) {
        articleList.value.push(...res)
      }
    })
    .finally(() => {
      isLoading.value = false
    })
}

const getListByType = (type: string) => {
  isLoading.value = true
  formModel.value.searchType = categoryMap[type]
  $post(type === 'all' ? 'article/getList' : 'article/searchByType', {
    ...formModel.value,
    searchAll: type === 'all' ? 'true' : undefined
  })
    .then((res: Aritcle[]) => {
      if (res) {
        articleList.value = res
      }
    })
      .then((res: Aritcle[]) => {
        articleList.value = res
      })
      .finally(() => {
        isLoading.value = false
      })
  } else {
    $post('article/getByType', {
      searchAll: 'false',
      articleShelf: '',
      searchType: type,
      page: 0,
      pageSize: 10
    })
      .then((res: Aritcle[]) => {
        articleList.value = res
      })
      .finally(() => {
        isLoading.value = false
      })
  }
}

watch(
  () => router.currentRoute.value.params,
  () => {
    const type: string = router.currentRoute.value.params.type as string
    formModel.value.page = 0
    getListByType(type)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped></style>
