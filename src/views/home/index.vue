<template>
  <div class="wrapper">
    <div class="panel-default">
      <div class="panel-body">
        <div class="main-container">
          <div class="entry-list">
            <SubHeader />
            <links-list :article-list="articleList" :is-loading="isLoading" />
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
import { Aritcle } from './type'

const router = useRouter()
const articleList = ref<Aritcle[]>([])
const isLoading = ref(true)

const getListByType = (type: string) => {
  isLoading.value = true
  articleList.value = []
  if (type === 'all') {
    $post('article/getList', {
      searchAll: 'true',
      articleShelf: '',
      searchType: '',
      page: 0,
      pageSize: 10
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
    getListByType(type)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped></style>
